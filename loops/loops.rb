<<<<<<< HEAD

live_loop :simple_drum do
  4.times do
    sample :bd_haus
    sleep 0.5
=======
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
>>>>>>> master
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

<<<<<<< HEAD
with_fx :distortion do
live_loop :distort_bass do
=======
define :groovy_bass do
>>>>>>> master
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
<<<<<<< HEAD
  sleep t
end

live_loop :snare_rise do
  8.times do
    sample :drum_snare_hard
    sleep 0.75
  end
  8.times do
    sample :drum_snare_hard
    sleep 0.375
  end
  8.times do
    sample :drum_snare_hard
    sleep 0.1875
  end
  sleep 1
end

live_loop :test_rise do
  use_synth  :dark_ambience
  p = ([:b5, :a5, :fs5] * 4).ring
  8.times do
    play p.tick, amp: 0.5
    sleep 0.5
  end
  16.times do
    play p.tick, amp: 1
    sleep 0.25
  end
  16.times do
    play p.tick, amp: 1.5
    sleep 0.125
  end
end
=======
end

>>>>>>> master
