<template>
  <div style="margin:auto">
    <ul class="set">
      <!-- <li class="whitekey b" id="p-key-B"></li>
      <li class="black as" id="p-key-As"></li>
      <li class="whitekey a"></li>
      <li class="black gs"></li>
      <li class="whitekey g"></li>
      <li class="black fs"></li>
      <li class="whitekey f"></li>
      <li class="whitekey e"></li>
      <li class="black ds"></li>
      <li class="whitekey d"></li>
      <li class="black cs"></li>
      <li class="whitekey c"></li> -->

      <!-- <li class="whitekey c" id="pkey-C"></li>
      <li class="black cs" id="pkey-Cs"></li>
      <li class="whitekey d" id="pkey-D"></li>
      <li class="black ds" id="pkey-Ds"></li>
      <li class="whitekey e" id="pkey-E"></li>
      <li class="whitekey f" id="pkey-F"></li>
      <li class="black fs" id="pkey-Fs"></li>
      <li class="whitekey g" id="pkey-G"></li>
      <li class="black gs" id="pkey-Gs"></li>
      <li class="whitekey a" id="pkey-A"></li>
      <li class="black as" id="pkey-As"></li>
      <li class="whitekey b" id="pkey-B"></li> -->

      <li class="whitekey c" id="pkey-36"></li>
      <li class="black cs" id="pkey-37"></li>
      <li class="whitekey d" id="pkey-38"></li>
      <li class="black ds" id="pkey-39"></li>
      <li class="whitekey e" id="pkey-40"></li>
      <li class="whitekey f" id="pkey-41"></li>
      <li class="black fs" id="pkey-42"></li>
      <li class="whitekey g" id="pkey-43"></li>
      <li class="black gs" id="pkey-44"></li>
      <li class="whitekey a" id="pkey-45"></li>
      <li class="black as" id="pkey-46"></li>
      <li class="whitekey b" id="pkey-47"></li>
      <li class="whitekey c" id="pkey-48"></li>
      <li class="black cs" id="pkey-49"></li>
      <li class="whitekey d" id="pkey-50"></li>
      <li class="black ds" id="pkey-51"></li>
      <li class="whitekey e" id="pkey-52"></li>
      <li class="whitekey f" id="pkey-53"></li>
      <li class="black fs" id="pkey-54"></li>
      <li class="whitekey g" id="pkey-55"></li>
      <li class="black gs" id="pkey-56"></li>
      <li class="whitekey a" id="pkey-57"></li>
      <li class="black as" id="pkey-58"></li>
      <li class="whitekey b" id="pkey-59"></li>
      <li class="whitekey c" id="pkey-60"></li>
      <li class="black cs" id="pkey-61"></li>
      <li class="whitekey d" id="pkey-62"></li>
      <li class="black ds" id="pkey-63"></li>
      <li class="whitekey e" id="pkey-64"></li>
      <li class="whitekey f" id="pkey-65"></li>
      <li class="black fs" id="pkey-66"></li>
      <li class="whitekey g" id="pkey-67"></li>
      <li class="black gs" id="pkey-68"></li>
      <li class="whitekey a" id="pkey-69"></li>
      <li class="black as" id="pkey-70"></li>
      <li class="whitekey b" id="pkey-71"></li>
      <li class="whitekey c" id="pkey-72"></li>
      <li class="black cs" id="pkey-73"></li>
      <li class="whitekey d" id="pkey-74"></li>
      <li class="black ds" id="pkey-75"></li>
      <li class="whitekey e" id="pkey-76"></li>
      <li class="whitekey f" id="pkey-77"></li>
      <li class="black fs" id="pkey-78"></li>
      <li class="whitekey g" id="pkey-79"></li>
      <li class="black gs" id="pkey-80"></li>
      <li class="whitekey a" id="pkey-81"></li>
      <li class="black as" id="pkey-82"></li>
      <li class="whitekey b" id="pkey-83"></li>
      <li class="whitekey c" id="pkey-84"></li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    // $('#pkey-C').click();
  }
}
</script>

<style scoped>
/* * {
  box-sizing:border-box
}

body {
  margin:0;
  background:#222
} */

ul {
  height:14em;
  margin:auto;
  padding:1em 1em 0 1em;
  position:relative;
  border:1px solid #160801;
  border-radius:1em;
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)
}

li {
  margin:0;
  padding:0;
  list-style:none;
  position:relative;
  float:left
}

ul .whitekey {
  height:12em;
  width:3em;
  z-index:1;
  border-left:1px solid #bbb;
  border-bottom:1px solid #bbb;
  border-radius:0 0 5px 5px;
  box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#eee 0%,#fff 100%)
}

ul .whitekey.active {
  border-top:1px solid #777;
  border-left:1px solid #999;
  border-bottom:1px solid #999;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)
}

ul .whitekey:active {
  border-top:1px solid #777;
  border-left:1px solid #999;
  border-bottom:1px solid #999;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)
}

ul .black {
  height:6em;
  width:1.5em;
  margin:0 0 0 -.75em;
  z-index:2;
  border:1px solid #000;
  border-radius:0 0 3px 3px;
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
  background:linear-gradient(45deg,#222 0%,#555 100%)
}

ul .black.active {
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  background:linear-gradient(to right,#444 0%,#222 100%)
}

ul .black:active {
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  background:linear-gradient(to right,#444 0%,#222 100%)
}

.a,.g,.e,.d,.b {
  margin:0 0 0 -.75em
}

/* ul li:first-child {
  border-radius:5px 0 5px 5px
}

ul li:last-child {
  border-radius:0 5px 5px 5px
}

ul {
  height:18.875em;
  margin:5em auto;
  padding:3em 0 0 3em;
  position:relative;
  border:1px solid #160801;
  border-radius:1em;
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)
}

li {
  margin:0;
  padding:0;
  list-style:none;
  position:relative;
  float:left
}

ul .whitekey {
  height:16em;
  width:4em;
  z-index:1;
  border-left:1px solid #bbb;
  border-bottom:1px solid #bbb;
  border-radius:0 0 5px 5px;
  box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#eee 0%,#fff 100%)
}

ul .whitekey.active {
  border-top:1px solid #777;
  border-left:1px solid #999;
  border-bottom:1px solid #999;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)
}

ul .whitekey:active {
  border-top:1px solid #777;
  border-left:1px solid #999;
  border-bottom:1px solid #999;
  box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
  background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)
}

ul .black {
  height:8em;
  width:2em;
  margin:0 0 0 -1em;
  z-index:2;
  border:1px solid #000;
  border-radius:0 0 3px 3px;
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
  background:linear-gradient(45deg,#222 0%,#555 100%)
}

ul .black.active {
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  background:linear-gradient(to right,#444 0%,#222 100%)
}

ul .black:active {
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
  background:linear-gradient(to right,#444 0%,#222 100%)
}

.a,.g,.e,.d,.b {
  margin:0 0 0 -1em
}

ul li:first-child {
  border-radius:5px 0 5px 5px
}

ul li:last-child {
  border-radius:0 5px 5px 5px
} */

</style>


