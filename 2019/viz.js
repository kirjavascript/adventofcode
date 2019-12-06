chart={Object.assign(window,{data,d3, width});return(0,eval)(`for(_='t=>~~t|",ZZ"YfillYX).W"WUatT("RanQTtrRPWPN"NMX#682775KwidthJ(t,a)=>In.bQdJ()HMxZIn(a)GKG+H/F500E),DDiCma@in?e(&WrQg&[%]=s();$select!1emMdyYd3.=scalereWcall()"axis])textW(|["+(+a+1)0,NJZH/2Dfont-dTa.appendRctMeightZdo@?W!AllRstyl&"const	MxZ50NyZNh~p(0)-p(t[NyZ~p(t[XsteelblueNdxY.5emURpart Nh12NJZ12CCg"|.PtrQsformYtrQslT&G00	 t=2a=e=3r=4d=cT&"divUpositionYlTive"C=dsvgMviewBoxZ[J,E,l=ig"gU(Wjo?Rg"DnBQd(W(.@p(Ia)%r,J-a.padd?g(.1DpL?ear(W([@x(,|[1.nic&%E-e,t;function s(){	 t=laMhfZI"https://github.com/kirjavascript/adventofcode/te/@ster/2019/day+"/@?.jsMtargetY_blQk");turn[ttMdxY-.1.4emM-QchorYmiddleMsizeY16pxMw600NfamilyYVerdQa")]}	[h,o$h.Po.F400;	[x,c$x.PF211c.G+.75*H11]"+(E-e)+"Bottom(nWtickSizeOuter(0)U(I"day )"+r+Z0Left(p)|.!R.Umov&))C15151"CK40402"Dd.nod&)';G=/[^ "#(->ABLOSV[-{}]/.exec(_);)with(_.split(G))_=join(shift());eval(_)`)}

chart = {
  const margin = ({top: 20, right: 0, bottom: 30, left: 40})
  const height = 500;
  const div = d3.create('div').style('position', 'relative');
  const svg = div.append("svg")
      .attr("viewBox", [0, 0, width, height]);

  const bars =svg.append("g")
    .selectAll("g")
    .data(data)
    .join("g")

  const x = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[1])]).nice()
    .range([height - margin.bottom, margin.top])

  const xAxis = g => g
    .attr("transform", 'translate(0,' + (height - margin.bottom) + ')')
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .selectAll('text')
    .text((d, i) => 'day '+(1 + +i))

  const yAxis = g => g
    .attr("transform", 'translate(' + margin.left +',0)')
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())

  function barsAndText() {
    const part = bars.append('a')
      .attr('href', (d, i) => 'https://github.com/kirjavascript/adventofcode/tree/master/2019/day' +(1 + +i)+'/main.js')
      .attr('target', '_blank')

      const _bars = part.append('rect')

      .attr("fill", "steelblue")
      .attr("x", (d,i) => x(i))
      .attr("y", d => y(d[0]))
      .attr("height", d => y(0) - y(d[0]))
      .attr("width", x.bandwidth()/2)

    const text = part.append('text')
       .attr('dx', '-.1em')
      .attr('dy', '1.4em')
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 600)
      .attr('font-family', 'Verdana')
    return [_bars, text];
  }

  const [bars1, text1] = barsAndText();

  bars1
      .attr("fill", "steelblue")
      .attr("x", (d,i) => x(i))
      .attr("y", d => y(d[0]))
      .attr("height", d => y(0) - y(d[0]))
      .attr("width", x.bandwidth()/2)

  text1
      .style('fill', '#682775')
      .attr("x", (d,i) => x(i)+ (x.bandwidth()/4))
      .attr("y", d => y(d[0]))
      .text(d => d[0])

    const [bars2, text2] = barsAndText();

  bars2
      .attr("fill", "#682775")
      .attr("x", (d,i) => x(i) + x.bandwidth()/2)
      .attr("y", d => y(d[1]))
      .attr("height", d => y(0) - y(d[1]))
      .attr("width", x.bandwidth()/2)

  text2
      .style('fill', 'steelblue')
      .attr("x", (d,i) => x(i)+ (x.bandwidth()*0.75))
      .attr("y", d => y(d[1]))
      .text(d => d[1])

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

    svg.append('rect').attr("fill", "steelblue").attr("x", 50).attr("y", 15).attr("height", 12).attr("width", 12);
    svg.append('text').attr("x", 50).attr("y", 15).attr('dx','1em').attr('dy','.5em').text('part 1')
    svg.append('rect').attr("fill", "#682775").attr("x", 50).attr("y", 40).attr("height", 12).attr("width", 12);
    svg.append('text').attr("x", 50).attr("y", 40).attr('dx','1em').attr('dy','.5em').text('part 2')

  div.node()
  return div.node();
}
