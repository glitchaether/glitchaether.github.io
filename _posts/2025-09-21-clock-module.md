---
title: "Clock Module"
description: "Introducing the Clock module: a flexible, tick‑based timer for Roblox with pause, resume, speed control, and state save/load."
author: glitchaether
date: 2025-09-21 00:00:00 +0000
categories: [Roblox, Modules]
tags: [clock, timer, wally, modules]
commets: true
---

I’m excited to share **Clock**, a lightweight, robust tick-based timer utility for Roblox development.
It supports features like pausing/resuming, adjustable speed, infinite or finite durations, and state saving/loading.  

---

## What is Clock?

Clock is a Lua (Luau) module built for Roblox that helps you manage timed logic in games and systems. It’s ideal for things like cooldowns, delayed events, sequencing, or any scenario where you want “tick by tick” control.

Key features:

- Create timers with a specified **interval** and **destiny** (number of ticks until it ends).  
- **Pause**, **resume**, **reset**, and jump to a specific tick.  
- Adjust the **speed multiplier** dynamically.  
- Support for **infinite** runs (destiny = 0).  
- Get and restore state via `Save()` / `Load()`.  
- Events/signals: `Started`, `Paused`, `Resumed`, `Ended`, and `onTick(tick)`.

---

## Getting Started

### Installation via Wally

Add to your `wally.toml`:

```toml
[dependencies]
Clock = "glitchaether/clock@1.0.1"
```

Then run:

```bash
wally install
```

### Manual

Simply copy `Clock.luau` into your project and use:

```lua
local Clock = require(path_to_clock)
```

---

## 📦 Usage Example

```lua
local Clock = require(Packages.Clock)

-- Create a clock ticking every 1 second, ending after 5 ticks
local clock = Clock.new(1, 5)

clock.Started:Connect(function()
  print("Clock started!")
end)

clock.onTick:Connect(function(tick)
  print("Tick:", tick)
end)

clock.Ended:Connect(function()
  print("Clock ended!")
end)

clock:startClock()
```

This will print:

```
Clock started!
Tick: 1
Tick: 2
Tick: 3
Tick: 4
Tick: 5
Clock ended!
```

You can also:

- `clock:pauseClock()` & `clock:resumeClock()`
- `clock:SetSpeed(2)` (double speed)
- `clock:Reset()` or `clock:Reset(2)` (restart from tick 0 or tick 2)
- `clock:WaitForTick(3)` — yields until the tick count hits 3
- `clock:Save()` / `clock:Load(state)` to persist or restore your clock’s state

---

## API Reference (selected)

| Method / Property | Description |
|--------------------|-------------|
| `Clock.new(interval, destiny, startingTick)` | Create a new clock. `interval` = seconds per tick (default 1), `destiny` = total ticks (0 = infinite), `startingTick` = optional start value. |
| `:startClock()` | Begin ticking (fires `Started`). |
| `:pauseClock()` / `:resumeClock()` | Control pause/resume (fires `Paused`/`Resumed`). |
| `:Reset(newTick?)` | Reset to zero or a specific tick. |
| `:SetSpeed(speed)` / `:GetSpeed()` | Change or fetch tick speed multiplier. |
| `:WaitForTick(targetTick)` | Yield until clock reaches `targetTick`. |
| `:IsInfinite()` | Returns `true` if destiny == 0. |
| `:Save()` / `:Load(state)` | Save or restore the internal state (tick, speed, paused). |
| `:Destroy()` | Stop the clock, clean up resources, fire `Ended` if not already. |

---

## Use Cases & Tips

- Use it for cooldowns or timers in UI (e.g. ability cooldowns, buff durations).  
- Great for sequenced events without relying on `delay()` or `spawn()`.  
- Because you can **save** and **load** its state, you can pause the game or serialize timers during game saves.  
- Be mindful of performance if creating many clocks — it’s lightweight, but always good to manage resource cleanup (use `Destroy()` when done).

---

## License

Clock is open-source under the **MIT License** — free to use, modify, and distribute.  
See the [LICENSE file in the repo](https://github.com/glitchaether/Clock/blob/main/LICENSE) for full terms.

---

## Wrap-up

Clock gives you precise, flexible control over tick-based timing logic in Roblox. Whether you're orchestrating sequences, managing cooldowns, or serializing time state — it’s designed to be reliable and easy to integrate.

Check out the full repo: [glitchaether/Clock](https://github.com/glitchaether/Clock)  
If you have ideas, improvements, or issues — I’m open!  
