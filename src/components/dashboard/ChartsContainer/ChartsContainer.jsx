import style from "./chartsContainer.module.scss";

import {
    LineChart,
    Line,
    PieChart,
    Pie,
    BarChart,
    Bar,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

const faturamentoMensal = [
    { mes: "Jan", valor: 50 },
    { mes: "Fev", valor: 80 },
    { mes: "Mar", valor: 65 },
    { mes: "Abr", valor: 90 },
    { mes: "Mai", valor: 120 },
    { mes: "Jun", valor: 110 },
];

const pedidosPorCategoria = [
    { name: "Camisetas", value: 400 },
    { name: "Calças", value: 300 },
    { name: "Tênis", value: 200 },
    { name: "Acessórios", value: 150 },
];

const vendasPorMes = [
    { mes: "Jan", vendas: 500 },
    { mes: "Fev", vendas: 700 },
    { mes: "Mar", vendas: 600 },
    { mes: "Abr", vendas: 900 },
    { mes: "Mai", vendas: 1100 },
];

const satisfacaoClientes = [
    { categoria: "Qualidade", nota: 9 },
    { categoria: "Preço", nota: 7 },
    { categoria: "Entrega", nota: 8 },
    { categoria: "Atendimento", nota: 9 },
];

const cores = [
    "rgb(var(--dark-gray))",
    "rgb(var(--dark-gray-2))",
    "rgb(var(--dark-gray-3))",
    "rgb(var(--light-gray))",
];
const heightSize = 300;

export default function ChartsContainer() {
    return (
        <div className={style.container}>
            {/* Gráfico de Linha - Faturamento */}
            <div className={style.chartCard}>
                <h2>Faturamento Mensal (R$ mil)</h2>
                <ResponsiveContainer width="100%" height={heightSize}>
                    <LineChart data={faturamentoMensal}>
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="valor"
                            stroke="rgb(var(--dark-gray-2))"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Gráfico de Pizza - Pedidos por Categoria */}
            <div className={style.chartCard}>
                <h2>Pedidos por Categoria</h2>
                <ResponsiveContainer width="100%" height={heightSize}>
                    <PieChart>
                        <Pie
                            data={pedidosPorCategoria}
                            dataKey="value"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {pedidosPorCategoria.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={cores[index % cores.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Gráfico de Barras - Vendas por Mês */}
            <div className={style.chartCard}>
                <h2>Vendas por Mês</h2>
                <ResponsiveContainer width="100%" height={heightSize}>
                    <BarChart data={vendasPorMes}>
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="vendas" fill="rgb(var(--primary))" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Gráfico Radar - Satisfação dos Clientes */}
            <div className={style.chartCard}>
                <h2>Satisfação dos Clientes</h2>
                <ResponsiveContainer width="100%" height={heightSize}>
                    <RadarChart outerRadius={90} data={satisfacaoClientes}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="categoria" />
                        <PolarRadiusAxis angle={30} />
                        <Radar
                            name="Nota"
                            dataKey="nota"
                            stroke="rgb(var(--primary))"
                            fill="rgb(var(--primary))"
                            fillOpacity={0.6}
                        />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
