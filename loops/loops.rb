live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :simple_bass do
  4.times do
    sample :bd_haus
    sleep 0.5
  end
end

with_fx :flanger do
  live_loop :flanged_lead do
    sample :loop_garzul, amp: 0.5, beat_stretch: 16
  end
end

with_fx :echo do
  live_loop :echo_bass do
    4.times do
      sample :bd_haus
      sleep 1
    end
  end
end

live_loop :silly_lead do
  use_synth :dsaw
  notes = (scale :e2, :minor_pentatonic, num_octaves: 2)
  16.times do
    play notes.choose, release: 0.1, cutoff: rrand(70, 120)
    sleep 0.25
  end
end

live_loop :amen_drum do
  p = [0.125, 0.25, 0.5].choose
  with_fx :slicer, phase: p, wave: 0, mix: rrand(0.7, 1) do
    sample :loop_amen, beat_stretch: 4, rate: 1, amp: 2
  end
  sleep 4
end


live_loop :dub_bass do
  bass_line = (knit :e1, 3, [:c1, :c2].choose, 1)
  with_fx :slicer, phase: [0.25, 0.5].choose, invert_wave: 1, wave: 0 do
    s = synth :square, note: bass_line.tick, sustain: 4, cutoff: 60
    control s, cutoff_slide: 4, cutoff: 120
  end
  sleep 4
end

with_fx :reverb do
  live_loop :basic_drum do
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

with_fx :distortion 
live_loop :distort_bass do
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

live_loop :industrial_lead do
  6.times do
    sample :loop_industrial, beat_stretch: 2, amp: 1
    sleep 2
  end
  2.times do
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

live_loop :groovy_bass do
  sample :loop_breakbeat, beat_stretch: 4, amp: 3
  sleep 4
end

live_loop :electro_lead do
  notes = (scale :e1, :minor_pentatonic, num_octaves: 2).shuffle
  tick_reset
  t = 0.04
  sleep -t
  with_fx :bitcrusher do
    s = synth :dsaw, note: :e3, sustain: 8, note_slide: t, release: 0, amp: 0.5
    32.times do
      sleep 0.25
      control s, note: notes.tick
    end
  end
  sleep t
end