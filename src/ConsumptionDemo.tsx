import { useState } from 'react';
import { Plug, Receipt } from 'lucide-react';

const periods = [
  { label: 'Hoy', kwh: 8.4 },
  { label: '7 días', kwh: 58.8 },
  { label: '30 días', kwh: 252 },
] as const;
const currency = (value: number) => new Intl.NumberFormat('es-AR', {
  style: 'currency', currency: 'ARS', minimumFractionDigits: 2,
}).format(value);
const number = (value: number) => new Intl.NumberFormat('es-AR', {
  minimumFractionDigits: 2, maximumFractionDigits: 2,
}).format(value);

export default function ConsumptionDemo() {
  const [selected, setSelected] = useState(2);
  const period = periods[selected];
  // Tarifa sintética exclusiva de la demostración. No es un cuadro real.
  const fixed = 180;
  const rate = 120;
  const variable = period.kwh * rate;
  return <div className="consumption-demo">
    <p className="consumption-subtitle">Lo que consumiste y lo que costaría esa energía en tu factura.</p>
    <div className="period-picker" role="group" aria-label="Período de consumo de demostración">
      {periods.map((item, index) => <button key={item.label} aria-pressed={selected === index}
        onClick={() => setSelected(index)}>{item.label}</button>)}
    </div>
    <div className="consumption-values" aria-live="polite" aria-atomic="true">
      <article><h4><Plug size={15}/> Electricidad usada · {period.label}</h4>
        <strong>{number(period.kwh)} <small>kWh</small></strong>
        <p>La unidad con la que se mide y se cobra la luz.</p></article>
      <article><h4><Receipt size={15}/> Referencia de cargos eléctricos</h4>
        <strong className="money">{currency(fixed + variable)}</strong>
        <p>Antes de impuestos y créditos no confirmados.</p></article>
    </div>
    <div className="cost-breakdown">
      <h4>Cómo se compone el importe</h4>
      <dl><div><dt>Cargo fijo ilustrativo</dt><dd>{currency(fixed)}</dd></div>
        <div><dt>Energía · {number(period.kwh)} kWh × {currency(rate)}</dt><dd>{currency(variable)}</dd></div>
        <div className="cost-total"><dt>Referencia de cargos eléctricos</dt><dd>{currency(fixed + variable)}</dd></div></dl>
    </div>
    <p className="tariff-disclaimer">Tarifa y datos ficticios para esta demostración. No representan precios vigentes de ninguna distribuidora ni una factura real. En la app, la referencia depende de la tarifa configurada y del período consultado.</p>
  </div>;
}
