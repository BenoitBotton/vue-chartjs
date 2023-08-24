import{_ as n,c as a,o as s,a as t}from"./app.934e51e5.js";const g='{"title":"Refer\xEAncia de codifica\xE7\xE3o","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Eventos","slug":"eventos"},{"level":2,"title":"M\xE9todos Globais","slug":"metodos-globais"},{"level":3,"title":"generateChart","slug":"generatechart"},{"level":2,"title":"M\xE9todos de inst\xE2ncia","slug":"metodos-de-instancia"},{"level":3,"title":"generateLegend()","slug":"generatelegend"},{"level":3,"title":"addPlugin","slug":"addplugin"},{"level":3,"title":"renderChart()","slug":"renderchart"},{"level":2,"title":"Objeto Chart.js","slug":"objeto-chart-js"},{"level":2,"title":"Canvas","slug":"canvas"}],"relativePath":"pt-br/api/index.md","lastUpdated":1692890407000}',e={},o=t(`<h1 id="referencia-de-codificacao" tabindex="-1">Refer\xEAncia de codifica\xE7\xE3o <a class="header-anchor" href="#referencia-de-codificacao" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>Existem alguns props b\xE1sicas definidas nos componentes fornecidos pelo <code>vue-chartjs</code>. Porque voc\xEA os <code>estende</code>, eles s\xE3o <em>invis\xEDveis</em>, mas voc\xEA pode substitu\xED-los:</p><table><thead><tr><th>Prop</th><th>Descri\xE7\xE3o</th></tr></thead><tbody><tr><td>width</td><td>largura do gr\xE1fico</td></tr><tr><td>height</td><td>altura do gr\xE1fico</td></tr><tr><td>chart-id</td><td>Id da tela</td></tr><tr><td>css-classes</td><td>String com classes css para a div circundante</td></tr><tr><td>styles</td><td>Objeto com estilos css para o div cont\xEAiner circundante</td></tr><tr><td>plugins</td><td>Array com plugins chartjs</td></tr></tbody></table><h2 id="eventos" tabindex="-1">Eventos <a class="header-anchor" href="#eventos" aria-hidden="true">#</a></h2><p>Se o mixin <code>reactiveData</code> ou <code>reactiveProp</code> estiver anexado, os seguintes eventos ser\xE3o emitidos:</p><table><thead><tr><th>Evento</th><th>Descri\xE7\xE3o</th></tr></thead><tbody><tr><td><code>chart:render</code></td><td>se o mixin executar um renderizador completo</td></tr><tr><td><code>chart:destroy</code></td><td>se o mixin excluir a inst\xE2ncia do objeto de gr\xE1fico</td></tr><tr><td><code>chart:update</code></td><td>se o mixin executar uma atualiza\xE7\xE3o em vez de uma nova renderiza\xE7\xE3o</td></tr><tr><td><code>labels:update</code></td><td>se novos labals foram definidos</td></tr><tr><td><code>xlabels:update</code></td><td>se novos xLabels foram definidos</td></tr><tr><td><code>ylabels:update</code></td><td>se novos yLabels foram definidos</td></tr></tbody></table><h2 id="metodos-globais" tabindex="-1">M\xE9todos Globais <a class="header-anchor" href="#metodos-globais" aria-hidden="true">#</a></h2><p>Os m\xE9todos globais precisam ser importados.</p><h3 id="generatechart" tabindex="-1">generateChart <a class="header-anchor" href="#generatechart" aria-hidden="true">#</a></h3><ul><li><strong>Tipo:</strong> <code>Function</code></li><li><strong>Argumentos</strong>: <code>chart-id</code>, <code>chart-type</code></li><li><strong>Uso:</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-chartjs&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// O primeiro argumento \xE9 o ID do gr\xE1fico, depois o tipo de gr\xE1fico.</span>
<span class="token keyword">const</span> CustomLine <span class="token operator">=</span> <span class="token function">generateChart</span><span class="token punctuation">(</span><span class="token string">&quot;custom-line&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LineWithLine&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="metodos-de-instancia" tabindex="-1">M\xE9todos de inst\xE2ncia <a class="header-anchor" href="#metodos-de-instancia" aria-hidden="true">#</a></h2><p>Os m\xE9todos de inst\xE2ncia podem ser usados \u200B\u200Bdentro do componente do gr\xE1fico.</p><h3 id="generatelegend" tabindex="-1">generateLegend() <a class="header-anchor" href="#generatelegend" aria-hidden="true">#</a></h3><p>Fun\xE7\xE3o auxiliar para gerar uma legenda HTML.</p><ul><li><strong>Tipo:</strong> <code>Function</code></li><li><strong>Argumentos</strong>: <code>none</code></li><li><strong>Uso:</strong></li></ul><div class="language-js"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Line <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Line<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;datasets&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">htmlLegend</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>datasets<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>htmlLegend <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateLegend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="addplugin" tabindex="-1">addPlugin <a class="header-anchor" href="#addplugin" aria-hidden="true">#</a></h3><p>No Chart.js, voc\xEA pode definir plugins globais e embutidos. Os plug-ins globais est\xE3o funcionando sem problemas com o <code>vue-chartjs</code> como descrito no <a href="http://www.chartjs.org/docs/latest/developers/plugins.html" target="_blank" rel="noopener noreferrer">Chart.js docs</a>.</p><p>Se voc\xEA deseja adicionar plug-ins embutidos, <code>vue-chartjs</code> exp\xF5e um m\xE9todo auxiliar chamado <code>addPlugin()</code> Voc\xEA deve chamar <code>addPlugin()</code> antes do m\xE9todo <code>renderChart()</code>.</p><ul><li><strong>Tipo:</strong> <code>Function</code></li><li><strong>Argumentos</strong>: <code>Array</code> de Plugins</li><li><strong>Uso:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;my-plugin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeInit</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chart</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="renderchart" tabindex="-1">renderChart() <a class="header-anchor" href="#renderchart" aria-hidden="true">#</a></h3><p>Cria uma inst\xE2ncia Chart.js e renderiza o gr\xE1fico.</p><ul><li><strong>Tipo:</strong> <code>Function</code></li><li><strong>Argumentos</strong>: <code>Chart Data</code>, <code>Chart Options</code></li><li><strong>Uso:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Data One&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="objeto-chart-js" tabindex="-1">Objeto Chart.js <a class="header-anchor" href="#objeto-chart-js" aria-hidden="true">#</a></h2><p>Voc\xEA pode acessar o objeto Chart.js dentro do componente do gr\xE1fico com <code>this.$data._chart</code></p><h2 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-hidden="true">#</a></h2><p>Voc\xEA pode acessar canvas com <code>this.$refs.canvas</code></p>`,31),p=[o];function c(r,i,d,l,u,k){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};
