export const state = () => ({
  categories: ['javascript', 'python', 'java'],
  archives: ['2017', '2018'],
  tags: ['promise', 'try', 'test', 'unit'],

  articles: [
    {
      id: '2018-12-12-javascript',
      cat: 'javascript',
      title: 'Promise',
      tag: 'promise',
      date: 'uly 6, 2017',
      author: 'Sophie He',
      description: `<p>In ES6,
      <code>Promise</code> is an improvement of traditional callback. We always put the async request in
      <code>new Promise()</code>, it will wait until you get the result for resolve or reject. While if you put the async function in
      <code>then()</code>, whatever you return in that async request,
      <code>then()</code> will return
      <code>Promise.resolve(undefined)</code> as async callback is just local function.</p>`,
      content: `
      <p>In ES6, <code>Promise</code> is an improvement of traditional callback. We always put the async request in <code>new Promise()</code>, it will wait until you get the result for resolve or reject. While if you put the async function in <code>then()</code>, whatever you return in that async request, <code>then()</code> will return <code>Promise.resolve(undefined)</code> as async callback is just local function.</p>
<a id="more"></a>
<pre><code class="hljs coffeescript">  <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {
reject(<span class="hljs-string">'No'</span>);
}).<span class="hljs-keyword">then</span>(e =&gt;{ <span class="hljs-regexp">//</span> reject jump <span class="hljs-keyword">this</span> step
<span class="hljs-built_in">console</span>.log(\`<span class="javascript"><span class="hljs-number">1</span> then \$\{e\}</span>\`);
}).<span class="hljs-keyword">catch</span>(e =&gt; { <span class="hljs-regexp">//</span> e == <span class="hljs-string">'No'</span>
<span class="hljs-built_in">console</span>.log(\`<span class="javascript"><span class="hljs-number">2</span> <span class="hljs-keyword">catch</span> \$\{e\}</span>\`);
<span class="hljs-regexp">//</span> <span class="hljs-number">2</span> <span class="hljs-keyword">catch</span> No, <span class="hljs-keyword">return</span> Promise.resolve(<span class="hljs-literal">undefined</span>)
}).<span class="hljs-keyword">then</span>(e =&gt; { <span class="hljs-regexp">//</span> e == <span class="hljs-string">'undefined'</span>
<span class="hljs-built_in">console</span>.log(\`<span class="javascript"><span class="hljs-number">3</span> then \$\{e\}</span>\`); <span class="hljs-regexp">//</span> <span class="hljs-number">3</span> <span class="hljs-keyword">then</span> <span class="hljs-literal">undefined</span>
<span class="hljs-keyword">return</span> Promise.resolve(<span class="hljs-string">'what?'</span>);
}).<span class="hljs-keyword">catch</span>(e =&gt; { <span class="hljs-regexp">//</span> resolve jump <span class="hljs-keyword">this</span> step
<span class="hljs-built_in">console</span>.log(\`<span class="javascript"><span class="hljs-number">4</span> <span class="hljs-keyword">catch</span> \$\{e\}</span>\`);
}).<span class="hljs-keyword">then</span>(e =&gt; { <span class="hljs-regexp">//</span> e == <span class="hljs-string">'what'</span>
<span class="hljs-built_in">console</span>.log(\`<span class="javascript"><span class="hljs-number">5</span> then \$\{e\}</span>\`); <span class="hljs-regexp">//</span> <span class="hljs-number">5</span> <span class="hljs-keyword">then</span> what?
})
</code></pre><p>If you want to pass the parameters, return in the end line of then function. They will be wrapped as <code>Promise.resolve(your parameters)</code>, regardless of basic type or Object.</p>
<p>When <code>catch()</code> does not return <code>Promise.reject(...)</code>, it will return <code>Promise.resolve(undefined)</code>. All the errors thrown halfway can be centralized processed in the final <code>catch()</code>.</p>
<p>There is an interesting test online:</p>
<pre><code class="hljs javascript">  doSomething().then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
<span class="hljs-keyword">return</span> doSomethingElse();
<span class="hljs-comment">// Promise.resolve(what doSomethingElse returns)</span>
});

doSomething().then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
doSomethingElse();
<span class="hljs-comment">// Promise.resolve(undefined)</span>
});

doSomething().then(
doSomethingElse()
<span class="hljs-comment">// this step will be ignored</span>
<span class="hljs-comment">// as then should contain a function definition</span>
);

doSomething().then(
doSomethingElse
<span class="hljs-comment">// Promise.resolve(what doSomethingElse returns)</span>
<span class="hljs-comment">// equals the first example</span>
);
</code></pre>`
    }
  ]
})
