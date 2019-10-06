#Sonic Pi Loop Controller by Robin Newman
#Modified by Andrew Chan
#VERSION 2 ADDS CONTROL OF BACKGROUND PULSE AND SCREEN
#Tested on a Mac: this version NOT sutiable for Pi3
#in particular uses some new :loop samples only in version 3.1
#These can be copied to teh samples folder on version 3.0.1 if required
#or you can specify different ones.
#Also may have to cut down use of fx calls on Pi3 as may overload it otherwise.
#This version uses 11 push buttons on TouchOSC for input and 1 LED on TouchOSC for output
#Can be modified to use any suitable OSC source thant can give on/off signals when a button is pressed

use_real_time
use_bpm 100
path="~/lighthouse/sonic-dj/samples/"

define :beep_lead do
  8.times do
    with_fx :reverb, room: 0.9 do
      with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
        synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 2, amp: 0.5
        sleep 4
      end
    end
  end
end

define :silly_lead do
  use_synth :dsaw
  notes = (scale :e2, :minor_pentatonic, num_octaves: 2)
  8.times do
    16.times do
      play notes.choose, release: 0.1, cutoff: rrand(70, 120)
      sleep 0.25
    end
  end
end

define :flanged_lead do
  with_fx :flanger do
    2.times do
      sample :loop_garzul, amp: 0.5, beat_stretch: 16
      sleep 16
    end
  end
end

define :industrial_lead do
  2.times do
    4.times do
      sample :loop_industrial, beat_stretch: 2, amp: 1
      sleep 2
    end
    4.times do
      sample :loop_industrial, beat_stretch: 2, amp: 1
      sample :elec_lo_snare
      sleep 0.5
      sample :elec_blip
      sleep 0.5
      sample :elec_blip
      sleep 0.25
      sample :elec_blip
      sleep 0.25
      sample :elec_blip
      sleep 0.25
      sample :elec_blip
      sleep 0.25
    end
  end
end

define :electro_lead do
  with_fx :bitcrusher do
    8.times do
      notes = (scale :e1, :minor_pentatonic, num_octaves: 2).shuffle
      s = synth :dsaw, note: :e3, sustain: 4, note_slide: 0.04, release: 0, amp: 0.5
      16.times do
        sleep 0.25
        control s, note: notes.tick
      end
    end
  end
end

define :simple_bass do
  64.times do
    sample :bd_haus
    sleep 0.5
  end
end

define :echo_bass do
  with_fx :echo do
    32.times do
      sample :bd_haus
      sleep 1
    end
  end
end

define :dub_bass do
  with_fx :slicer, phase: [0.25, 0.5].choose, invert_wave: 1, wave: 0 do
    8.times do
      bass_line = (knit :e1, 3, [:c1, :c2].choose, 1)
      s = synth :square, note: bass_line.tick, sustain: 4, cutoff: 60
      control s, cutoff_slide: 4, cutoff: 120
      sleep 4
    end
  end
end

define :distort_bass do
  with_fx :distortion do
    2.times do
      8.times do
        sample :bass_dnb_f, pitch: 0, finish: 0.6
        sleep 1
      end
      8.times do
        sample :bass_dnb_f, pitch: 1, finish: 0.6
        sleep 1
      end
    end
  end
end

define :groovy_bass do
  8.times do
    sample :loop_breakbeat, beat_stretch: 4, amp: 3
    sleep 4
  end
end

define :amen_drum do
  8.times do
    p = [0.125, 0.25, 0.5].choose
    with_fx :slicer, phase: p, wave: 0, mix: rrand(0.7, 1) do
      sample :loop_amen, beat_stretch: 4, rate: 1, amp: 2
    end
    sleep 4
  end
end

define :basic_drum do
  with_fx :reverb do
    8.times do
      sample :drum_heavy_kick
      sleep 0.5
      sample :drum_heavy_kick
      sleep 0.5
      sample :drum_heavy_kick
      sample :drum_cymbal_closed
      sleep 0.5
      sample :drum_heavy_kick
      sleep 0.25
      sample :drum_heavy_kick
      sleep 0.25
      sample :drum_heavy_kick
      sleep 0.5
      sample :drum_heavy_kick
      sleep 0.5
      sample :drum_cymbal_closed
      sleep 0.5
      sample :drum_heavy_kick
      sleep 0.5
    end
  end
end



use_debug false
use_osc_logging false
use_osc "localhost", 14560

define :parse_sync_address do |address|
  v = get_event(address).to_s.split(",")[6] #[address.length+1..-2].to_i
  if v != nil
    return v[3..-2].split("/")
  else
    return ["error"]
  end
end

live_loop :pon do
  b = sync "/osc/1/push*"
  if b[0] == 1
    r = parse_sync_address "/osc/1/push*"
    ns= r[2][4..-1]
    set ("c"+ns).to_sym,1
    doCommandSelect(ns .to_i)
  end
end
live_loop :poff do
  b = sync "/osc/1/push*"
  if b[0] == 0
    r = parse_sync_address "/osc/1/push*"
    ns= r[2][4..-1]
    set ("c"+ns).to_sym,0
  end
end

define :doCommandSelect do |n|
  puts n
  case n
  when 1
    #parameters: channel,vol,samplename,beatstrech value
    in_thread do
      doLoop 1, 1, beep_lead, 1
    end
  when 2
    in_thread do
      doLoop 2, 1, silly_lead, 1
    end
  when 3
    in_thread do
      doLoop 3, 1, flanged_lead, 1
    end
  when 4
    in_thread do
      doLoop 4, 1, industrial_lead, 1
    end
  when 5
    in_thread do
      doLoop 5, 1, electro_lead, 1
    end
  when 6
    in_thread do
      doLoop 6, 1, simple_bass, 1
    end
  when 7
    in_thread do
      doLoop 7, 1, echo_bass, 1
    end
  when 8
    in_thread do
      doLoop 8, 1, dub_bass, 1
    end
  when 9
    in_thread do
      doLoop 9, 1, distort_bass, 1
    end
  when 10
    in_thread do
      doLoop 10, 1, groovy_bass, 1
    end
  when 11
    in_thread do
      doLoop 11, 1, amen_drum, 1
    end
  when 12
    in_thread do
      doLoop 12, 1, basic_drum, 1
    end
  when 13
    doOneShot 13,4,path+"shoryuken.wav" #parameters channel,vol,sample
    #as a singleShot plays once so only sync the start
  else
    puts "nothing"
  end
end

#general function to set up stoppable live_loop
define :doLoop do |n,vol,sampleName,bs,|
  set ("kill"+n.to_s).to_sym,false
  ln=("name"+n.to_s).to_sym
  in_thread do
    loop do
      if get( ("c"+n.to_s).to_sym)==0
        s= get( ("s"+n.to_s).to_sym)
        kill s
        set ("kill"+n.to_s).to_sym, true
        stop
      end
      sleep 0.1
    end
  end
  live_loop  ln, sync: :metro do
    s=sample sampleName,beat_stretch: bs,amp: vol
    set ("s"+n.to_s).to_sym,s
    k=(bs/0.1).to_i
    k.times do
      sleep bs.to_f/k
      stop if get( ("kill"++n.to_s).to_sym)
    end
  end
end

#general function to start stoppable single shot sample
define :doOneShot do |n,vol,sampleName,bs=0|
  sync :metro
  if bs >0
    s=sample sampleName,beat_stretch: bs,amp: vol
  else
    s=sample sampleName,amp: vol
  end
  in_thread do
    loop do
      if get( ("c"++n.to_s).to_sym)==0
        kill s
        stop
      end
      sleep 0.1
    end
  end
end

#general function to set up long repeating note
define :doLongNote do |n,vol,synth,note,dur|
  set ("kill"+n.to_s).to_sym,false
  ln=("name"+n.to_s).to_sym
  in_thread do
    loop do
      if get( ("c"+n.to_s).to_sym)==0
        s= get( ("s"+n.to_s).to_sym)
        control s,amp: 0,amp_slide: 0.05
        sleep 0.05
        kill s
        set ("kill"+n.to_s).to_sym, true
        stop
      end
      sleep 0.1
    end
  end
  live_loop  ln, sync: :metro do
    use_synth synth
    s=play note,sustain: dur-1,release: 1,cutoff: 100,amp: vol
    set ("s"+n.to_s).to_sym,s
    k=(dur/0.1).to_i
    k.times do
      sleep dur.to_f/k
      stop if get( ("kill"++n.to_s).to_sym)
    end
  end
end

#function to setup sequence of notes (stoppable)
define :doLoopSequence do |n,vol,synth|
  set ("kill"+n.to_s).to_sym,false
  ln=("name"+n.to_s).to_sym
  in_thread do
    loop do
      if get( ("c"+n.to_s).to_sym)==0
        set ("kill"+n.to_s).to_sym, true
        stop
      end
      sleep 0.1
    end
  end
  live_loop  ln, sync: :metro do
    use_synth synth
    
    play scale(:c3,:minor_pentatonic,num_octaves: 2).choose,release: 0.20,amp: vol,cutoff: rrand_i(60,120)
    10.times do #do this to get a quicker response time
      sleep 0.25 / 10
      stop if get(("kill"+n.to_s).to_sym)
    end
  end
end

beat_counter = 0 # 4 beats per bar
bar_counter = 0 # 8 bars per phrase
phrase_counter = 0 # 6 phrases per song

live_loop :metro do #metronome to sync stuff together
  if !beat_counter.zero? && beat_counter % 4 == 0 then
    beat_counter = 0
    bar_counter += 1
  end
  if !bar_counter.zero? && bar_counter % 8 == 0 then
    bar_counter = 0
    phrase_counter += 1
  end
  if !phrase_counter.zero? && phrase_counter % 6 == 0 then
    phrase_counter = 0
    bar_counter = 0
    beat_counter = 0
  end
  osc "/beat", beat_counter, bar_counter, phrase_counter
  beat_counter += 1
  sleep 1
end