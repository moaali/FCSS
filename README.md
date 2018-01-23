## Getting started
Import fcss into your project
```html
<!-- Load from rawgit -->
<link rel="stylesheet" href="https://cdn.rawgit.com/moaali/fcss/master/lib/fcss.min.css">
```
<br>

## Documentation

### Mixins
- `generate-responsive`: Mixin used to generate responsive suffixes for classes (i.e. `m-10@sm+`).<br>
- `media-query-ranges`: Mixin used to generate css rules for specific media queries:<br>
```scss
// Mixin used to match specific device width.
at($breakpoint)

// Mixin used to match the devices between 2 breakpoints.
between($breakpoint1, $breakpoint2)

// Mixin used to match all devices under certain breakpoint.
to($breakpoint)

// Mixin used to match certain breakpoint
// and all devices above it.
from($breakpoint)

// Mixin used for custom rules that don't follow
// any of the following premade media queries.
mq($condition)
```
- `media-query-condition`: Mixin used to generate responsive versions of css rules.<br>
- `placeholder`: Generate placeholder rules for different vendors.<br>

<br>

### Helpers
#### Border
```scss
.bd  { border: 1px solid hsla(210, 40%, 15%, 0.1) !important; }
.bd  { border: 1px solid hsla(210, 40%, 15%, 0.1) !important; }
.bdT { border-top: 1px solid hsla(210, 40%, 15%, 0.1) !important; }
.bdR { border-right: 1px solid hsla(210, 40%, 15%, 0.1) !important; }
.bdB { border-bottom: 1px solid hsla(210, 40%, 15%, 0.1) !important; }
.bdL { border-left: 1px solid hsla(210, 40%, 15%, 0.1) !important; }

// $i = 0 --> 5
.bdw-#{$i}  { border-width: #{$i}px !important; }
.bdwT-#{$i} { border-top-width: #{$i}px !important; }
.bdwR-#{$i} { border-right-width: #{$i}px !important; }
.bdwB-#{$i} { border-bottom-width: #{$i}px !important; }
.bdwL-#{$i} { border-left-width: #{$i}px !important; }

// $i = 0 --> 5
.bdrs-#{$i} { border-radius: #{$i}px !important; }

.bdrsT-#{$i} {
  border-top-left-radius: #{$i}px !important;
  border-top-right-radius: #{$i}px !important;
}

.bdrsR-#{$i} {
  border-top-right-radius: #{$i}px !important;
  border-bottom-right-radius: #{$i}px !important;
}

.bdrsB-#{$i} {
  border-bottom-left-radius: #{$i}px !important;
  border-bottom-right-radius: #{$i}px !important;
}

.bdrsL-#{$i} {
  border-top-left-radius: #{$i}px !important;
  border-bottom-left-radius: #{$i}px !important;
}

.bdrs-50p  { border-radius: 50% !important; }
.bdrs-10em { border-radius: 10em !important; }

.bds-n  { border-style: none !important; }
.bds-s  { border-style: solid !important; }
.bds-dt { border-style: dotted !important; }
.bds-ds { border-style: dashed !important; }
.bds-db { border-style: double !important; }
.bds-g  { border-style: groove !important; }
.bds-r  { border-style: ridge !important; }
.bds-i  { border-style: inset !important; }
.bds-o  { border-style: outset !important; }
```

#### Colors
```scss
// `$name` is replaced with the following identifiers.
// blocker   = hsla(210, 40%, 15%, 1)    Big Headlines - Inverted Backgrounds.
// critical  = hsla(210, 40%, 15%, 0.85) Main Titles.
// pivotal   = hsla(210, 40%, 15%, 0.7)  Icons - Links.
// major     = hsla(210, 40%, 15%, 0.55) Main Text.
// minor     = hsla(210, 40%, 15%, 0.4)  Disabled Stats - Placeholders.
// omitted   = hsla(210, 40%, 15%, 0.25) Strips Background.
// vague     = hsla(210, 40%, 15%, 0.1)  Borders - Light Backgrounds.
// primary   = hsla(210, 70%, 50%, 1)
// secondary = hsla(260, 75%, 55%, 1)
// accent    = hsla(135, 80%, 50%, 1)
// extra     = hsla(35, 100%, 55%, 1)
// danger    = hsla(360, 95%, 55%, 1)
// warning   = hsla(35, 100%, 55%, 1)
// info      = hsla(260, 75%, 55%, 1)
// success   = hsla(135, 100%, 50%, 1)

.c-#{$name},     .cH-#{$name}:hover    { color: $color !important; }
.bgc-#{$name},   .bgcH-#{$name}:hover  { background-color: $color !important; }
.bdc-#{$name},   .bdcH-#{$name}:hover  { border-color: $color !important; }
.fill-#{$name},  .fillH-#{$name}:hover { fill: $color !important; }
.str-#{$name},   .strH-#{$name}:hover  { stroke: $color !important; }
```

#### Flex
```scss
// Every class accepts repsonsive suffixes.

.d-f     { display: flex; }
.d-if    { display: inline-flex; }

.fxw-w   { flex-wrap: wrap; }
.fxw-wr  { flex-wrap: wrap-reverse; }
.fxw-nw  { flex-wrap: nowrap; }

.fxd-c   { flex-direction: column; }
.fxd-cr  { flex-direction: column-reverse; }
.fxd-r   { flex-direction: row; }
.fxd-rr  { flex-direction: row-reverse; }

.ai-fs   { align-items: flex-start; }
.ai-fe   { align-items: flex-end; }
.ai-c    { align-items: center; }
.ai-b    { align-items: baseline; }
.ai-s    { align-items: stretch; }

.as-fs   { align-self: flex-start; }
.as-fe   { align-self: flex-end; }
.as-c    { align-self: center; }
.as-b    { align-self: baseline; }
.as-s    { align-self: stretch; }

.ac-fs   { align-content: flex-start; }
.ac-fe   { align-content: flex-end; }
.ac-c    { align-content: center; }
.ac-s    { align-content: stretch; }
.ac-sb   { align-content: space-between; }
.ac-sa   { align-content: space-around; }

.jc-fs   { justify-content: flex-start; }
.jc-fe   { justify-content: flex-end; }
.jc-c    { justify-content: center; }
.jc-sb   { justify-content: space-between; }
.jc-sa   { justify-content: space-around; }

.fx-n    { flex: none; }
.fx-1    { flex: 1; }

.fxb-a   { flex-basis: auto; }
.fxb-0   { flex-basis: 0; }

.fxg-1   { flex-grow: 1; }
.fxg-0   { flex-grow: 0; }

.fxs-1   { flex-shrink: 1; }
.fxs-0   { flex-shrink: 0; }
```

#### Layout
```scss
// Every class accepts repsonsive suffixes.

.d-b          { display: block !important; }
.d-ib         { display: inline-block !important; }
.d-i          { display: inline !important; }
.d-tb         { display: table !important; }
.d-tbc        { display: table-cell !important; }
.d-n          { display: none !important; }

.ov-h         { overflow: hidden !important; }
.ov-a         { overflow: auto !important; }
.ov-s         { overflow: scroll !important; }

.ovY-h        { overflow-y: hidden !important; }
.ovX-h        { overflow-x: hidden !important; }
.ovY-a        { overflow-y: auto !important; }
.ovX-a        { overflow-x: auto !important; }
.ovY-s        { overflow-y: scroll !important; }
.ovX-s        { overflow-x: scroll !important; }

.fl-l         { float: left !important; }
.fl-r         { float: right !important; }
.fl-n         { float: none !important; }

.va-t         { vertical-align: top !important; }
.va-m         { vertical-align: middle !important; }
.va-b         { vertical-align: bottom !important; }

.pos-s        { position: static !important; }
.pos-st       { position: sticky !important; }
.pos-r        { position: relative !important; }
.pos-a        { position: absolute !important; }
.pos-f        { position: fixed !important; }

// $i = 0 --> 9
.z-#{$i} { z-index: ($i * 1000) !important; }
```

#### Lists
```scss
.lisp-i { list-style-position: inside; }
.lisp-o { list-style-position: outside; }

.lis-n  { list-style: none; }
.list-c { list-style-type: circle; }
.list-s { list-style-type: square; }
.list-u { list-style-type: upper-roman; }
.list-l { list-style-type: lower-alpha; }
```

#### Margin
```scss
// Every class accepts repsonsive suffixes.
// $i = 0 --> 4 step 1
// $i = 5 --> 35 step 5
// $i = 40 --> 160 step 10

.m-#{$i}  { margin: #{$i}px !important; }
.mT-#{$i} { margin-top: #{$i}px !important; }
.mR-#{$i} { margin-right: #{$i}px !important; }
.mB-#{$i} { margin-bottom: #{$i}px !important; }
.mL-#{$i} { margin-left: #{$i}px !important; }

.mY-#{$i} {
  margin-top: #{$i}px !important;
  margin-bottom: #{$i}px !important;
}

.mX-#{$i} {
  margin-left: #{$i}px !important;
  margin-right: #{$i}px !important;
}

.m-nv-#{$i}  { margin: -#{$i}px !important; }
.mT-nv-#{$i} { margin-top: -#{$i}px !important; }
.mR-nv-#{$i} { margin-right: -#{$i}px !important; }
.mB-nv-#{$i} { margin-bottom:- #{$i}px !important; }
.mL-nv-#{$i} { margin-left: -#{$i}px !important; }

.mY-nv-#{$i} {
  margin-top: -#{$i}px !important;
  margin-bottom: -#{$i}px !important;
}

.mX-nv-#{$i} {
  margin-left: -#{$i}px !important;
  margin-right: -#{$i}px !important;
}
```

#### Objects
```scss
.bgsz-cv   { background-size: cover; }
.bgsz-ct   { background-size: contain; }
.bgsz-full { background-size: 100% 100%; }

.bgpX-c    { background-position-x: center; }
.bgpX-t    { background-position-x: top; }
.bgpX-r    { background-position-x: right; }
.bgpX-l    { background-position-x: left; }
.bgpX-b    { background-position-x: bottom; }
.bgpY-c    { background-position-y: center; }
.bgpY-t    { background-position-y: top; }
.bgpY-r    { background-position-y: right; }
.bgpY-l    { background-position-y: left; }
.bgpY-b    { background-position-y: bottom; }

.bgr-n     { background-repeat: no-repeat; }
.bgr-y     { background-repeat: repeat-y; }
.bgr-x     { background-repeat: repeat-x; }

.of-ct     { object-fit: contain; }
.of-cv     { object-fit: cover; }
.of-f      { object-fit: fill; }
.of-n      { object-fit: none; }
.of-sd     { object-fit: scale-down; }

.rsz-v     { resize: vertical; }
.rsz-h     { resize: horizontal; }

.op-0      { opacity: 0; }
.op-10p    { opacity: 0.1; }
.op-20p    { opacity: 0.2; }
.op-30p    { opacity: 0.3; }
.op-40p    { opacity: 0.4; }
.op-50p    { opacity: 0.5; }
.op-60p    { opacity: 0.6; }
.op-70p    { opacity: 0.7; }
.op-80p    { opacity: 0.8; }
.op-90p    { opacity: 0.9; }
.op-100p   { opacity: 1; }

.cur-na    { cursor: not-allowed; }
.cur-p     { cursor: pointer; }
.cur-a     { cursor: auto; }

.vis-v     { visibility: visible; }
.vis-h     { visibility: hidden; }
```

#### Padding
```scss
// Every class accepts repsonsive suffixes.
// $i = 0 --> 4 step 1
// $i = 5 --> 35 step 5
// $i = 40 --> 160 step 10
.p-#{$i}  { padding: #{$i}px !important; }
.pT-#{$i} { padding-top: #{$i}px !important; }
.pR-#{$i} { padding-right: #{$i}px !important; }
.pB-#{$i} { padding-bottom: #{$i}px !important; }
.pL-#{$i} { padding-left: #{$i}px !important; }

.pY-#{$i} {
  padding-top: #{$i}px !important;
  padding-bottom: #{$i}px !important;
}

.pX-#{$i} {
  padding-left: #{$i}px !important;
  padding-right: #{$i}px !important;
}
```

#### Positions
```scss
// Every class accepts repsonsive suffixes.
// $i = 0 --> 4 step 1
// $i = 5 --> 35 step 5
// $i = 40 --> 160 step 10
.t-#{$i} { top: #{$i}px; }
.r-#{$i} { right: #{$i}px; }
.b-#{$i} { bottom: #{$i}px; }
.l-#{$i} { left: #{$i}px; }

.tl-50p {
  top: 50%;
  left: 50%;
}

.tr-50p {
  top: 50%;
  right: 50%;
}

.t-50p { top: 50%; }
.r-50p { right: 50%; }
.b-50p { bottom: 50%; }
.l-50p { left: 50%; }
```

#### Pseudo
```scss
.no-after::after, .no-pseudo::after    { display: none !important; }
.no-before::before, .no-pseudo::before { display: none !important; }
```

#### Sizes
```scss
// Every class accepts repsonsive suffixes.

.w-1\/4u, .sz-1\/4u    { width: 0.25rem; }
.w-1\/2u, .sz-1\/2u    { width: 0.5rem; }
.w-3\/4u, .sz-3\/4u    { width: 0.75rem; }
.w-1u, .sz-1u          { width: 1rem; }
.w-3\/2u, .sz-3\/2u    { width: 1.5rem; }
.w-2u, .sz-2u          { width: 2rem; }
.w-5\/2u, .sz-5\/2u    { width: 2.5rem; }
.w-3u, .sz-3u          { width: 3rem; }
.w-7\/2u, .sz-7\/2u    { width: 3.5rem; }
.w-4u, .sz-4u          { width: 4rem; }
.w-9\/2u, .sz-9\/2u    { width: 4.5rem; }
.w-5u, .sz-5u          { width: 5rem; }
.w-11\/2u, .sz-11\/2u  { width: 5.5rem; }
.w-6u, .sz-6u          { width: 6rem; }
.w-13\/2u, .sz-13\/2u  { width: 6.5rem; }
.w-7u, .sz-7u          { width: 7rem; }
.w-15\/2u, .sz-15\/2u  { width: 7.5rem; }
.w-8u, .sz-8u          { width: 8rem; }
.w-17\/2u, .sz-17\/2u  { width: 8.5rem; }
.w-9u, .sz-9u          { width: 9rem; }
.w-19\/2u, .sz-19\/2u  { width: 9.5rem; }
.w-10u, .sz-10u        { width: 10rem; }

.w-0     { width: 0px; }
.w-10p   { width: 10%; }
.w-20p   { width: 20%; }
.w-30p   { width: 30%; }
.w-40p   { width: 40%; }
.w-50p   { width: 50%; }
.w-60p   { width: 60%; }
.w-70p   { width: 70%; }
.w-80p   { width: 80%; }
.w-90p   { width: 90%; }
.w-100p  { width: 100%; }
.w-1px   { width: 1px; }
.w-a     { width: auto; }

.h-1\/4u, .sz-1\/4u    { height: 0.25rem; }
.h-1\/2u, .sz-1\/2u    { height: 0.5rem; }
.h-3\/4u, .sz-3\/4u    { height: 0.75rem; }
.h-1u, .sz-1u          { height: 1rem; }
.h-3\/2u, .sz-3\/2u    { height: 1.5rem; }
.h-2u, .sz-2u          { height: 2rem; }
.h-5\/2u, .sz-5\/2u    { height: 2.5rem; }
.h-3u, .sz-3u          { height: 3rem; }
.h-7\/2u, .sz-7\/2u    { height: 3.5rem; }
.h-4u, .sz-4u          { height: 4rem; }
.h-9\/2u, .sz-9\/2u    { height: 4.5rem; }
.h-5u, .sz-5u          { height: 5rem; }
.h-11\/2u, .sz-11\/2u  { height: 5.5rem; }
.h-6u, .sz-6u          { height: 6rem; }
.h-13\/2u, .sz-13\/2u  { height: 6.5rem; }
.h-7u, .sz-7u          { height: 7rem; }
.h-15\/2u, .sz-15\/2u  { height: 7.5rem; }
.h-8u, .sz-8u          { height: 8rem; }
.h-17\/2u, .sz-17\/2u  { height: 8.5rem; }
.h-9u, .sz-9u          { height: 9rem; }
.h-19\/2u, .sz-19\/2u  { height: 9.5rem; }
.h-10u, .sz-10u        { height: 10rem; }

.h-0     { height: 0; }
.h-auto  { height: auto; }
.h-100p  { height: 100%; }
.h-100vh { height: 100vh; }

.mw-100p { max-width: 100%; }
.mw-n    { max-width: n; }

.mh-100p { max-height: 100%; }
.mh-n    { max-height: none; }
```

#### Typography
```scss
// Only `text-align` classes accepts repsonsive suffixes.
.ta-c { text-align: center !important; }
.ta-l { text-align: left !important; }
.ta-r { text-align: right !important; }

.tt-n { text-transform: none !important; }
.tt-u { text-transform: uppercase !important; }
.tt-l { text-transform: lowercase !important; }
.tt-c { text-transform: capitalize !important; }

.fs-i { font-style: italic !important; }
.fs-o { font-style: oblique !important; }

.td-n  { text-decoration: none !important; }
.td-o  { text-decoration: overline !important; }
.td-lt { text-decoration: line-through !important; }
.td-u  { text-decoration: underline !important; }

.whs-nw { white-space: nowrap !important; }
.whs-p  { white-space: pre !important; }
.whs-n  { white-space: normal !important; }

.wob-n  { word-break: normal !important; }
.wob-ba { word-break: break-all !important; }
.wob-k  { word-break: keep-all !important; }

.wow-bw { word-wrap: break-word !important; }
.wow-n  { word-wrap: normal !important; }

.tov-e { text-overflow: ellipsis !important; }

.fsz-xs   { font-size: 0.75rem !important; }
.fsz-sm   { font-size: 0.87rem !important; }
.fsz-def  { font-size: 1rem !important; }
.fsz-md   { font-size: 1.15rem !important; }
.fsz-lg   { font-size: 1.4rem !important; }
.fsz-xl   { font-size: 1.7rem !important; }

.fw-100 { font-weight: 100 !important; }
.fw-200 { font-weight: 200 !important; }
.fw-300 { font-weight: 300 !important; }
.fw-400 { font-weight: 400 !important; }
.fw-500 { font-weight: 500 !important; }
.fw-600 { font-weight: 600 !important; }
.fw-700 { font-weight: 700 !important; }
.fw-800 { font-weight: 800 !important; }
.fw-900 { font-weight: 900 !important; }

.lh-0    { line-height: 0 !important; }
.lh-1    { line-height: 1 !important; }
.lh-3\/2 { line-height: 1.5 !important; }
```

### Utils

#### Center
```scss
// Every class accepts repsonsive suffixes.
.centerY {
  top: 50%;
  transform: translateY(-50%);
}

.centerX {
  left: 50%;
  transform: translateX(-50%);
}

.centerXY {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### Clearfix
```scss
.cf {
  &::before,
  &::after {
    content: ' ';
    display: table;
  }

  &::after {
    clear: both;
  }
}
```

#### Gap
Used to apply spaces between all direct children
```scss
// Every class accepts repsonsive suffixes.
// $i = 0 --> 4 step 1
// $i = 5 --> 35 step 5
// $i = 40 --> 160 step 10

.gapX-#{$i} {
  margin-left: #{($i / -2)}px !important;
  margin-right: #{($i / -2)}px !important;

  & > * {
    padding-left: #{($i / 2)}px !important;
    padding-right: #{($i / 2)}px !important;
  }
}

.gapY-#{$i} {
  margin-top: #{($i / -2)}px !important;
  margin-bottom: #{($i / -2)}px !important;

  & > * {
    padding-top: #{($i / 2)}px !important;
    padding-bottom: #{($i / 2)}px !important;
  }
}

.gap-#{$i} {
  margin: #{($i / -2)}px !important;

  & > * {
    padding: #{($i / 2)}px !important;
  }
}
```

#### Image Replace
```scss
// Used to replace text with image.

.ir {
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
```

#### Layers
```scss
// Stack sections in column style using flexbox.

.layers {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
```

#### Peers
Used to stack blocks horizontally using flexbox.

```html
<!-- Stack blocks orizontally -->
<div class="peers">
  <div class="peer"></div>

  <!-- Nested peers that takes the remaining space -->
  <div class="peers peers-greed">
    <!-- Greed peer that takes the remaining space -->
    <div class="peer peer-greed"></div>
    <div class="peer"></div>
  </div>
  ...
</div>
```
<br>

### Responsivity
The next suffixes are used for responsivity of the above classes:
```scss
// sm = 576px;
// md = 768px;
// lg = 992px;
// xl = 1200px;
// hd = 1600px;

// `*-sm+` Any device width >= sm
// `*-md+` Any device width >= sm
// `*-lg+` Any device width >= sm
// `*-xl+` Any device width >= sm
// `*-hd+` Any device width >= sm

// `*-sm-` Any device width < sm
// `*-md-` Any device width < sm
// `*-lg-` Any device width < sm
// `*-xl-` Any device width < sm
// `*-hd-` Any device width < sm

// `*-xl` Any device width >= xl & < hd
// `*-lg` Any device width >= lg & < xl
// `*-md` Any device width >= md & < lg
// `*-sm` Any device width >= sm & < md
```
<br>

## License
🍟 MIT
