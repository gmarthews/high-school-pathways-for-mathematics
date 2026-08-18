// ═══════════════════════════════════════════════════════════════════════════════
// IAL Further Mathematics — Curriculum Pathways
// Multi-school, multi-program configuration data
// ═══════════════════════════════════════════════════════════════════════════════
//
// MAINTENANCE GUIDE
// ─────────────────
// This file holds ALL school data. The rendering code (index.html) never needs
// editing when pathways change. To add or modify a school, find the relevant
// section below, copy a template, and change the fields.
//
// HOW TO ADD A SCHOOL
// ───────────────────
// 1. Copy a template entry from the bottom of this file (search for "TEMPLATE")
// 2. Paste it into the correct group section
// 3. Change: id, name, short, programs[], tracks[], courses[], connections[]
// 4. Save this file — the website updates automatically on next page load
//
// HOW TO REMOVE A SCHOOL
// ──────────────────────
// Delete the school's entire { ... } block from the SCHOOLS array.
//
// HOW TO ADD A NEW PROGRAM TYPE
// ─────────────────────────────
// Programs are tags, not separate code. To add a program:
// 1. Add it to the school's programs[] array: { id: "myprog", label: "My Prog", color: "#HEX" }
// 2. Add tracks with program: "myprog"
// 3. Add courses with program: "myprog"
// 4. Add connections with program: "myprog"
// The renderer will automatically show it as a tab and filter correctly.
//
// HOW TO ADD A COURSE
// ────────────────────
// Add to the courses[] array:
//   { id: "unique-id", name: "Display\nName", grade: GRADE_INDEX, track: "track-id",
//     program: "program-id" or null, type: "type-key", col: 0 }
//
// GRADE INDEX MAPPING (column in the grid):
//   3 = Grade 10  (IGCSE / Pre-Calculus / Bespoke)
//   4 = Grade 11  (AS Level / AP start / IB start)
//   5 = Grade 12  (A2 Level / FM / AP exam / IB exam)
//   6 = University destinations
//
// PROGRAM FIELD:
//   null       = shared across all programs (Grade 10 courses)
//   "alevel"   = A-Level only
//   "ap"       = AP only
//   "ib"       = IB only
//
// COURSE TYPES (used for colour-coding):
//   foundation  = Pre-IGCSE
//   igcse       = IGCSE 0580 Extended
//   igcse-core  = IGCSE 0580 Core (fallback — no forward connections)
//   cam-add     = Additional Maths 0606
//   precalc     = Pre-Calculus
//   alevel      = A-Level modules
//   fm          = Further Maths modules
//   ap          = AP courses
//   ib          = IB courses
//   university  = University destinations
//
// CORE 0580 RULE:
//   Core is a dimmed fallback with NO forward connections.
//   A student who fails Extended drops into Core — it gives them a qualification
//   but does NOT lead to A-Level/AP/IB. Do NOT add connections out of Core.
//
// CONNECTION FIELD:
//   program: null  = always drawn (shared Grade 10 connections)
//   program: "X"   = only drawn when program X is selected
//
// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATES (copy and modify for new schools)
// ═══════════════════════════════════════════════════════════════════════════════
//
// TEMPLATE A — A-Level + 0580 + 0606 (standard A-Level school)
// ─────────────────────────────────────────────────────────────
// {
//   id: "school-id",
//   name: "Full School Name",
//   short: "Short Name",
//   programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
//   grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
//   tracks: [
//     { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
//     { id: "fast",     label: "Fast Track",     color: "#0891B2", program: "alevel" },
//     { id: "regular",  label: "Regular Track",  color: "#059669", program: "alevel" },
//   ],
//   courses: [
//     // Grade 10 — shared
//     { id: "gc-ext",   name: "IGCSE 0580\nExtended",  grade: 3, track: "foundation", program: null, type: "igcse",      col: 0 },
//     { id: "gc-core",  name: "IGCSE 0580\nCore",       grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
//     { id: "add-maths",name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add",    col: 0 },
//     // Grade 11 — A-Level
//     { id: "as-maths",      name: "AS Maths\nP1 + S1",    grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
//     { id: "as-fm",         name: "AS Further\nFP1 + D1",  grade: 4, track: "advanced", program: "alevel", type: "fm",     col: 1 },
//     { id: "as-maths-fast", name: "AS Maths\nP1 + P2",     grade: 4, track: "fast",     program: "alevel", type: "alevel", col: 0 },
//     { id: "as-maths-reg",  name: "AS Maths\nP1 + P2",     grade: 4, track: "regular",  program: "alevel", type: "alevel", col: 0 },
//     // Grade 12 — A-Level
//     { id: "a2-maths",      name: "A2 Maths\nP3 + P4 + M1",       grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
//     { id: "a2-fm",         name: "A2 Further\nFP2 + FP3/M2/M3",   grade: 5, track: "advanced", program: "alevel", type: "fm",     col: 1 },
//     { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1",            grade: 5, track: "fast",     program: "alevel", type: "alevel", col: 0 },
//     { id: "a2-fm-fast",    name: "A2 Further\nFP1+FP2+S2",       grade: 5, track: "fast",     program: "alevel", type: "fm",     col: 1 },
//     { id: "a2-maths-reg",  name: "A2 Maths\nP3 + P4",            grade: 5, track: "regular",  program: "alevel", type: "alevel", col: 0 },
//     // University
//     { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
//     { id: "uni-broad", name: "Broad\nAcademic",            grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
//   ],
//   connections: [
//     // Grade 10 shared
//     { from: "gc-ext", to: "add-maths", type: "normal", program: null },
//     // Extended → AS (main path)
//     { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
//     { from: "add-maths", to: "as-fm",    type: "fm",     program: "alevel" },
//     { from: "gc-ext",    to: "as-maths", type: "normal", program: "alevel" },
//     // Extended → AS (direct, no 0606)
//     { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
//     // Fast track
//     { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
//     { from: "a2-maths-fast", to: "a2-fm-fast",    type: "fm",     program: "alevel" },
//     // Regular track
//     { from: "gc-ext",         to: "as-maths-reg",  type: "normal", program: "alevel" },
//     { from: "as-maths-reg",   to: "a2-maths-reg",  type: "normal", program: "alevel" },
//     // Advanced track continuation
//     { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
//     { from: "as-fm",    to: "a2-fm",    type: "fm",     program: "alevel" },
//     // University
//     { from: "a2-maths",     to: "uni-quant", type: "uni", program: null },
//     { from: "a2-fm",        to: "uni-quant", type: "uni", program: null },
//     { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
//   ],
// },
//
// TEMPLATE B — AP + Pre-Calculus (AP-only school)
// ────────────────────────────────────────────────
// {
//   id: "school-id",
//   name: "Full School Name",
//   short: "Short Name",
//   programs: [{ id: "ap", label: "AP", color: "#E84855" }],
//   grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
//   tracks: [
//     { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
//   ],
//   courses: [
//     { id: "precalc",     name: "Pre-Calculus",    grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 0 },
//     { id: "ap-calc-ab",  name: "AP Calculus AB",  grade: 4, track: "ap-standard", program: "ap", type: "ap",      col: 0 },
//     { id: "ap-stats",    name: "AP Statistics",    grade: 4, track: "ap-standard", program: "ap", type: "ap",      col: 1 },
//     { id: "ap-calc-bc",  name: "AP Calculus BC",  grade: 5, track: "ap-standard", program: "ap", type: "ap",      col: 0 },
//     { id: "uni-quant",   name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0 },
//     { id: "uni-broad",   name: "Broad\nAcademic",           grade: 6, track: "university", program: null, type: "university", col: 0 },
//   ],
//   connections: [
//     { from: "precalc",    to: "ap-calc-ab", type: "normal", program: "ap" },
//     { from: "precalc",    to: "ap-stats",   type: "normal", program: "ap" },
//     { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
//     { from: "ap-calc-bc", to: "uni-quant",  type: "uni",    program: null },
//     { from: "ap-stats",   to: "uni-broad",  type: "uni",    program: null },
//   ],
// },
//
// TEMPLATE C — IB only + 0580 + 0606
// ───────────────────────────────────
// {
//   id: "school-id",
//   name: "Full School Name",
//   short: "Short Name",
//   programs: [{ id: "ib", label: "IB", color: "#059669" }],
//   grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
//   tracks: [
//     { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
//     { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
//   ],
//   courses: [
//     { id: "gc-ext",   name: "IGCSE 0580\nExtended",  grade: 3, track: "foundation", program: null, type: "igcse",      col: 0 },
//     { id: "gc-core",  name: "IGCSE 0580\nCore",       grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
//     { id: "add-maths",name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add",    col: 0 },
//     { id: "ib-math-sl",     name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
//     { id: "ib-math-hl",     name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
//     { id: "ib-math-sl-exam",name: "IB Math SL\nExam",      grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
//     { id: "ib-math-hl-exam",name: "IB Math HL\nExam",      grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
//     { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0 },
//     { id: "uni-broad", name: "Broad\nAcademic",            grade: 6, track: "university", program: null, type: "university", col: 0 },
//   ],
//   connections: [
//     { from: "gc-ext", to: "add-maths",     type: "normal", program: null },
//     { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
//     { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
//     { from: "gc-ext",    to: "ib-math-sl", type: "normal", program: "ib" },
//     { from: "gc-ext",    to: "ib-math-hl", type: "normal", program: "ib" },
//     { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
//     { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
//     { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
//     { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
//   ],
// },
//
// TEMPLATE D — Multi-program (e.g. A-Level + AP)
// ───────────────────────────────────────────────
// Add a second program to programs[], add its tracks, add its courses
// (with program: "ap"), and add its connections (with program: "ap").
// Shared Grade 10 courses use program: null — they appear for both programs.
//
// ═══════════════════════════════════════════════════════════════════════════════

const SCHOOLS = [

  // ════════════════════════════════════════════════════════════
  //  GROUP A — A-Level + 0580 + 0606 (standard A-Level pathway)
  // ════════════════════════════════════════════════════════════

  {
    id: "chengdu-shishi",
    name: "Chengdu Shishi High School",
    short: "Chengdu Shishi",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      // Grade 10 — shared
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      // Grade 11 — A-Level
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      // Grade 12 — A-Level
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      // University
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      // Extended → 0606 → AS (main path)
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      // Extended → AS (direct, no 0606)
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      // Core fallback (no forward connections)
      // Fast track
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      // Regular track
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      // Advanced track continuation
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      // University
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "dalian-24",
    name: "Dalian No. 24 High School",
    short: "Dalian 24",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "jiangyin-nanjing",
    name: "Jiangyin Nanjing High School",
    short: "Jiangyin Nanjing",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "nanjing-jinling",
    name: "Nanjing Jinling High School",
    short: "Nanjing Jinling",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "renchaofen",
    name: "Renchaofen Experimental School, Beijing",
    short: "Renchaofen",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "kings-college-chengdu",
    name: "King's College School Chengdu",
    short: "KCS Chengdu",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP B — A-Level + 0580 only (no 0606)
  // ════════════════════════════════════════════════════════════

  {
    id: "hangzhou-fls",
    name: "Hangzhou Foreign Languages School",
    short: "Hangzhou FLS",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "ningbo-zhenhai",
    name: "Ningbo Zhenhai High School",
    short: "Ningbo Zhenhai",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "zhangjiagang-ivy",
    name: "Zhangjiagang IVY Experimental School",
    short: "Zhangjiagang IVY",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "wuxi-no1",
    name: "Wuxi No. 1 High School",
    short: "Wuxi No. 1",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP C — AP + Pre-Calculus only
  // ════════════════════════════════════════════════════════════

  {
    id: "tianjin-fls",
    name: "Tianjin Foreign Languages School",
    short: "Tianjin FLS",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 0 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "tongzhou-iec",
    name: "RDFZ Tongzhou Campus",
    short: "Tongzhou IEC",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 0 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "rdfz-xishan",
    name: "RDFZ Xishan School, Beijing",
    short: "RDFZ Xishan",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 0 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "suzhou-experimental",
    name: "Suzhou Experimental High School",
    short: "Suzhou Experimental",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 0 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP D — AP + 0580 + 0606
  // ════════════════════════════════════════════════════════════

  {
    id: "wuxi-tianyi",
    name: "Wuxi Jiangsu Tianyi High School",
    short: "Wuxi Tianyi",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "hangzhou-no14",
    name: "Zhejiang Hangzhou No.14 High School",
    short: "Hangzhou No.14",
    programs: [{ id: "ap", label: "AP", color: "#E84855" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP E — IB only + 0580 + 0606
  // ════════════════════════════════════════════════════════════

  {
    id: "changchun-shida",
    name: "The High School Attached to Northeast Normal University",
    short: "Changchun Shida",
    programs: [{ id: "ib", label: "IB", color: "#059669" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
      { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "ib-math-sl", name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl", name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-sl-exam", name: "IB Math SL\nExam", grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl-exam", name: "IB Math HL\nExam", grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
      { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "shanghai-ib",
    name: "High School Affiliated to Shanghai Jiao Tong University",
    short: "Shanghai Jiao Tong",
    programs: [{ id: "ib", label: "IB", color: "#059669" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
      { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "ib-math-sl", name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl", name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-sl-exam", name: "IB Math SL\nExam", grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl-exam", name: "IB Math HL\nExam", grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
      { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP F — Multi-program schools
  // ════════════════════════════════════════════════════════════

  // ── A-Level + IB ──

  {
    id: "nanjing-fls",
    name: "Nanjing Foreign Languages School",
    short: "Nanjing FLS",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ib", label: "IB", color: "#059669" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
      { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
    ],
    courses: [
      // Grade 10 — shared
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      // A-Level
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      // IB
      { id: "ib-math-sl", name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl", name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-sl-exam", name: "IB Math SL\nExam", grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl-exam", name: "IB Math HL\nExam", grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      // University
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      // Grade 10 shared
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      // A-Level paths
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      // IB paths
      { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
      // University
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
      { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "wuxi-dipont",
    name: "Wuxi Dipont School of Arts & Science",
    short: "Wuxi Dipont",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ib", label: "IB", color: "#059669" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
      { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "ib-math-sl", name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl", name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-sl-exam", name: "IB Math SL\nExam", grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl-exam", name: "IB Math HL\nExam", grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
      { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ── A-Level + AP ──

  {
    id: "shenzhen-fls",
    name: "Shenzhen Foreign Languages School",
    short: "Shenzhen FLS",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ap", label: "AP", color: "#E84855" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "linhai-fls",
    name: "Linhai Foreign Languages School",
    short: "Linhai FLS",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ap", label: "AP", color: "#E84855" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  {
    id: "xian-gaoxin",
    name: "Xi'an Gaoxin No. 1 High School",
    short: "Xi'an Gaoxin",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ap", label: "AP", color: "#E84855" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ── A-Level + AP + IB (triple) ──

  {
    id: "renmin",
    name: "High School Affiliated to Renmin University, Beijing",
    short: "Renmin",
    programs: [
      { id: "alevel", label: "A-Level", color: "#3B82F6" },
      { id: "ap", label: "AP", color: "#E84855" },
      { id: "ib", label: "IB", color: "#059669" },
    ],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
      { id: "ap-standard", label: "AP Standard", color: "#E84855", program: "ap" },
      { id: "ib-sl", label: "IB SL", color: "#059669", program: "ib" },
      { id: "ib-hl", label: "IB HL", color: "#047857", program: "ib" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      // A-Level
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      // AP
      { id: "precalc", name: "Pre-Calculus", grade: 3, track: "ap-standard", program: "ap", type: "precalc", col: 1 },
      { id: "ap-calc-ab", name: "AP Calculus AB", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      { id: "ap-stats", name: "AP Statistics", grade: 4, track: "ap-standard", program: "ap", type: "ap", col: 1 },
      { id: "ap-calc-bc", name: "AP Calculus BC", grade: 5, track: "ap-standard", program: "ap", type: "ap", col: 0 },
      // IB
      { id: "ib-math-sl", name: "IB Math\nAnalysis SL", grade: 4, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl", name: "IB Math\nAnalysis HL", grade: 4, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-sl-exam", name: "IB Math SL\nExam", grade: 5, track: "ib-sl", program: "ib", type: "ib", col: 0 },
      { id: "ib-math-hl-exam", name: "IB Math HL\nExam", grade: 5, track: "ib-hl", program: "ib", type: "ib", col: 0 },
      // University
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Maths, Engineering, CS, Physics" },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0, note: "Sciences, Humanities, Business" },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      // A-Level
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      // AP
      { from: "gc-ext", to: "precalc", type: "normal", program: "ap" },
      { from: "add-maths", to: "precalc", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-calc-ab", type: "normal", program: "ap" },
      { from: "precalc", to: "ap-stats", type: "normal", program: "ap" },
      { from: "ap-calc-ab", to: "ap-calc-bc", type: "normal", program: "ap" },
      // IB
      { from: "add-maths", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "add-maths", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-sl", type: "normal", program: "ib" },
      { from: "gc-ext", to: "ib-math-hl", type: "normal", program: "ib" },
      { from: "ib-math-sl", to: "ib-math-sl-exam", type: "normal", program: "ib" },
      { from: "ib-math-hl", to: "ib-math-hl-exam", type: "normal", program: "ib" },
      // University
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
      { from: "ap-calc-bc", to: "uni-quant", type: "uni", program: null },
      { from: "ap-stats", to: "uni-broad", type: "uni", program: null },
      { from: "ib-math-hl-exam", to: "uni-quant", type: "uni", program: null },
      { from: "ib-math-sl-exam", to: "uni-broad", type: "uni", program: null },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  GROUP F — Placeholder schools (data to follow)
  // ════════════════════════════════════════════════════════════

  {
    id: "beijing-renze",
    name: "Beijing Renze",
    short: "Beijing Renze",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0 },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0 },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
    note: "PLACEHOLDER — actual program data to follow",
  },

  {
    id: "hangzhou-dipont",
    name: "Hangzhou Dipont School of Arts and Science",
    short: "Hangzhou Dipont",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0 },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0 },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
    note: "PLACEHOLDER — actual program data to follow",
  },

  {
    id: "kunshan-dipont",
    name: "Dipont Huayao Collegiate School Kunshan",
    short: "Kunshan Dipont",
    programs: [{ id: "alevel", label: "A-Level", color: "#3B82F6" }],
    grades: ["Grade 10", "Grade 11", "Grade 12", "University"],
    tracks: [
      { id: "advanced", label: "Advanced Track", color: "#4F46E5", program: "alevel" },
      { id: "fast", label: "Fast Track", color: "#0891B2", program: "alevel" },
      { id: "regular", label: "Regular Track", color: "#059669", program: "alevel" },
    ],
    courses: [
      { id: "gc-ext", name: "IGCSE 0580\nExtended", grade: 3, track: "foundation", program: null, type: "igcse", col: 0 },
      { id: "gc-core", name: "IGCSE 0580\nCore", grade: 3, track: "foundation", program: null, type: "igcse-core", col: 0 },
      { id: "add-maths", name: "Additional\nMaths 0606", grade: 3, track: "foundation", program: null, type: "cam-add", col: 0 },
      { id: "as-maths", name: "AS Maths\nP1 + S1", grade: 4, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "as-fm", name: "AS Further\nFP1 + D1", grade: 4, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "as-maths-fast", name: "AS Maths\nP1 + P2", grade: 4, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "as-maths-reg", name: "AS Maths\nP1 + P2", grade: 4, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-maths", name: "A2 Maths\nP3 + P4 + M1", grade: 5, track: "advanced", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm", name: "A2 Further\nFP2 + FP3/M2/M3", grade: 5, track: "advanced", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-fast", name: "A2 Maths\nP3 + M1", grade: 5, track: "fast", program: "alevel", type: "alevel", col: 0 },
      { id: "a2-fm-fast", name: "A2 Further\nFP1+FP2+S2", grade: 5, track: "fast", program: "alevel", type: "fm", col: 1 },
      { id: "a2-maths-reg", name: "A2 Maths\nP3 + P4", grade: 5, track: "regular", program: "alevel", type: "alevel", col: 0 },
      { id: "uni-quant", name: "Quantitative\n& Technical", grade: 6, track: "university", program: null, type: "university", col: 0 },
      { id: "uni-broad", name: "Broad\nAcademic", grade: 6, track: "university", program: null, type: "university", col: 0 },
    ],
    connections: [
      { from: "gc-ext", to: "add-maths", type: "normal", program: null },
      { from: "add-maths", to: "as-maths", type: "normal", program: "alevel" },
      { from: "add-maths", to: "as-fm", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths", type: "normal", program: "alevel" },
      { from: "gc-ext", to: "as-maths-fast", type: "normal", program: "alevel" },
      { from: "as-maths-fast", to: "a2-maths-fast", type: "normal", program: "alevel" },
      { from: "a2-maths-fast", to: "a2-fm-fast", type: "fm", program: "alevel" },
      { from: "gc-ext", to: "as-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths-reg", to: "a2-maths-reg", type: "normal", program: "alevel" },
      { from: "as-maths", to: "a2-maths", type: "normal", program: "alevel" },
      { from: "as-fm", to: "a2-fm", type: "fm", program: "alevel" },
      { from: "a2-maths", to: "uni-quant", type: "uni", program: null },
      { from: "a2-fm", to: "uni-quant", type: "uni", program: null },
      { from: "a2-maths-reg", to: "uni-broad", type: "uni", program: null },
    ],
    note: "PLACEHOLDER — actual program data to follow",
  },

  // ════════════════════════════════════════════════════════════
  //  MODULE KEY
  // ════════════════════════════════════════════════════════════
];

// ─── Module key ───
const MODULE_KEY = {
  P:  "Pure Mathematics",
  M:  "Mechanics",
  S:  "Statistics",
  FP: "Further Pure Mathematics",
  D:  "Decision Mathematics",
};

// ─── Type colours ───
const TYPE_COLORS = {
  foundation:  "#6B7280",
  igcse:       "#8B5CF6",
  "igcse-core": "#A78BFA",
  "cam-add":   "#A855F7",
  precalc:     "#F59E0B",
  alevel:      "#3B82F6",
  fm:          "#E84855",
  ap:          "#DC2626",
  ib:          "#059669",
  university:  "#F59E0B",
};
