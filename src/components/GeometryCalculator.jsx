import { useMemo, useState } from 'react';

const shapes = [
  { key: 'circle', label: 'Circle', fields: [{ name: 'radius', label: 'Radius (r)' }], area: ({ radius }) => Math.PI * radius * radius, perimeter: ({ radius }) => 2 * Math.PI * radius },
  { key: 'rectangle', label: 'Rectangle', fields: [{ name: 'width', label: 'Width (w)' }, { name: 'height', label: 'Height (h)' }], area: ({ width, height }) => width * height, perimeter: ({ width, height }) => 2 * (width + height) },
  { key: 'triangle', label: 'Right Triangle', fields: [{ name: 'base', label: 'Base (b)' }, { name: 'height', label: 'Height (h)' }, { name: 'hypotenuse', label: 'Hypotenuse (c, optional for perimeter)' }], area: ({ base, height }) => 0.5 * base * height, perimeter: ({ base, height, hypotenuse }) => (hypotenuse ? base + height + hypotenuse : base + height + Math.hypot(base, height)) },
  { key: 'sphere', label: 'Sphere', fields: [{ name: 'radius', label: 'Radius (r)' }], area: ({ radius }) => 4 * Math.PI * radius * radius, perimeter: ({ radius }) => 2 * Math.PI * radius },
];

export default function GeometryCalculator() {
  const [shape, setShape] = useState('circle');
  const [inputs, setInputs] = useState({});

  const { area, perimeter } = useMemo(() => {
    const s = shapes.find((x) => x.key === shape);
    const vals = {};
    s.fields.forEach((f) => {
      const v = parseFloat(inputs[f.name]);
      if (!Number.isFinite(v)) return;
      vals[f.name] = v;
    });

    const a = s.area(vals);
    const p = s.perimeter(vals);
    return {
      area: Number.isFinite(a) ? a : undefined,
      perimeter: Number.isFinite(p) ? p : undefined,
    };
  }, [shape, inputs]);

  const current = shapes.find((x) => x.key === shape);

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Geometry Calculator</h2>
        <p className="text-gray-600 mt-2">Compute area and perimeter quickly for common shapes.</p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700">Select shape</label>
            <select
              value={shape}
              onChange={(e) => { setInputs({}); setShape(e.target.value); }}
              className="mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              {shapes.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-gray-700">{f.label}</label>
                  <input
                    type="number"
                    step="any"
                    value={inputs[f.name] ?? ''}
                    onChange={(e) => setInputs((prev) => ({ ...prev, [f.name]: e.target.value }))}
                    className="mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Results</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <div className="text-sm text-gray-600">Area</div>
                <div className="text-2xl font-bold text-gray-900">{area !== undefined ? area.toFixed(3) : '—'}</div>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <div className="text-sm text-gray-600">Perimeter / Circumference</div>
                <div className="text-2xl font-bold text-gray-900">{perimeter !== undefined ? perimeter.toFixed(3) : '—'}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Values are computed live. Use consistent units.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
