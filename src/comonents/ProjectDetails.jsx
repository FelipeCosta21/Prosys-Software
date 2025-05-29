import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCheck, FaChevronRight, FaChevronDown, FaInfoCircle, FaEllipsisH, FaPlus, FaFilter } from 'react-icons/fa';
import { projectsData } from '../data/dummyData';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectId = parseInt(id);
    const project = projectsData.find(p => p.id === projectId) || projectsData[0];

    const [activeTab, setActiveTab] = useState('Grelha');
    const renderContent = () => {
        switch (activeTab) {
            case 'Grelha':
                return renderGrelhaView();
            case 'Quadro':
                return renderQuadroView();
            case 'Gráficos':
                return renderGraficosView();
            case 'Pessoas':
                return renderPessoasView();
            default:
                return renderGrelhaView();
        }
    };

    const renderGrelhaView = () => {
        return (
            <>
                <div className="flex justify-end mb-6">
                    <div className="flex space-x-3">
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>Linha Base</span>
                        </button>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>Filtros (0)</span>
                        </button>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>Coloração condicional</span>
                        </button>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>7 Membros do grupo</span>
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <FaEllipsisH />
                        </button>
                    </div>
                </div>

                <div className=''>
                    <div className="grid grid-cols-12 gap-4 border-b border-gray-200 py-2 text-gray-600 text-sm">
                        <div className="col-span-5">
                            <div className="flex items-center">
                                <span>Nome da Tarefa</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center">
                                <span>Atribuída a</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex items-center">
                                <span>Início</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex items-center">
                                <span>Conclusão</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center">
                                <span>Duração</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center">
                                <span>% concluída</span>
                                <FaChevronDown className="ml-1 text-xs" />
                            </div>
                        </div>
                    </div>

                    {project.tasks?.map((task) => (
                        <div
                            key={task.id}
                            className={`grid grid-cols-12 gap-4 border-b border-gray-200 p-2.5 ${task.level === 1 || task.level === 3 ? 'bg-gray-50' : 'bg-white'
                                }`}
                        >
                            <div className="col-span-5 flex gap-2 items-center" >
                                <div className="mr-2 text-[#008442]">
                                    <FaCheck />
                                </div>
                                <div className="flex ">

                                    <span className={task.completed ? "line-through text-gray-500" : ""}>
                                        {task.name}
                                    </span>

                                </div>
                            </div>
                            <div className="col-span-1">
                                {task.assignee && (
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold">
                                            {task.assignee.initials}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-span-2">{task.startDate}</div>
                            <div className="col-span-2">{task.endDate}</div>
                            <div className="col-span-1">{task.duration}</div>
                            <div className="col-span-1">
                                <div className="w-full bg-[#008442] h-1.5 rounded-none"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    const renderQuadroView = () => {
        const { quadro } = project;

        return (
            <div className="mt-4 ">
                <div className="flex justify-between items-center mb-6 ">
                    <div></div>
                    <div className="flex space-x-3">
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <FaFilter className="mr-2" />
                            <span>Filtros (0)</span>
                        </button>
                        <div className="flex items-center space-x-1 border border-gray-300 rounded px-3 py-1.5 text-sm hover:bg-gray-50">
                            <span className="text-gray-700">Agrupar por Grupo</span>
                            <FaChevronDown className="text-gray-500" />
                        </div>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>7 Membros do grupo</span>
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <FaEllipsisH />
                        </button>
                    </div>
                </div>

                {/* Kanban board */}
                <div className="flex gap-6">
                    {quadro?.columns.map((column) => (
                        <div key={column.id} className="w-1/3">
                            <h3 className="text-lg font-medium mb-3">{column.title}</h3>
                            <div className="bg-white border border-gray-300 rounded mb-4 p-3 flex items-center text-[#008442] cursor-pointer hover:bg-gray-50">
                                <FaPlus className="mr-2" />
                                <span>Adicionar tarefa</span>
                            </div>
                            {column.tasks && column.tasks.map((task) => (
                                <div key={task.id} className="bg-white border border-gray-300 rounded mb-3 p-3 shadow-sm">
                                    <div className="flex items-start">
                                        <div className="mt-1 mr-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                                        </div>
                                        <div className="flex-1">
                                            {task.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {column.completedCount > 0 && (
                                <div className="flex items-center text-sm text-gray-600 mt-2">
                                    <FaChevronDown className="mr-2" />
                                    <span>Concluídas</span>
                                    <span className="ml-auto">{column.completedCount}</span>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex-1 mt-10">
                        <button className="w-34 bg-[#008442] text-white font-medium py-2 rounded hover:bg-[#007038]">
                            Adicionar grupo
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderGraficosView = () => {
        const { graficos } = project;
        const donutData = {
            labels: ['Não Iniciado', 'Em Curso', 'Em Atraso', 'Concluído'],
            datasets: [
                {
                    data: [
                        graficos.estado.statusChart.naoIniciado,
                        graficos.estado.statusChart.emCurso,
                        graficos.estado.statusChart.emAtraso,
                        graficos.estado.statusChart.concluido
                    ],
                    backgroundColor: ['#777777', '#3b82f6', '#dc2626', '#008442'],
                    borderWidth: 0,
                },
            ],
        };
        const donutOptions = {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        };

        const barOptions = {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    grid: {
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };

        return (
            <div className="mt-4">
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-medium mb-6">Estado</h3>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 relative">
                                <Doughnut data={donutData} options={donutOptions} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="text-2xl font-bold">{graficos.estado.remainingTasks}</div>
                                    <div className="text-sm text-gray-500">Tarefas restantes</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2 mt-8">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-500 mr-2"></div>
                                <span className="text-sm">Não Iniciado</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                                <span className="text-sm">Em Curso</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-red-600 mr-2"></div>
                                <span className="text-sm">Em Atraso</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-[#008442] mr-2"></div>
                                <span className="text-sm">Concluído</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-medium mb-6">Grupo</h3>
                        <Bar
                            data={{
                                ...graficos.grupo.barData,
                                datasets: graficos.grupo.barData.datasets.map(dataset => ({
                                    ...dataset,
                                    backgroundColor: dataset.label === 'Concluído' ? '#008442' :
                                        dataset.label === 'Em Atraso' ? '#dc2626' :
                                            dataset.label === 'Em Curso' ? '#3b82f6' : '#777777'
                                }))
                            }}
                            options={barOptions}
                            height={200}
                        />
                        <div className="grid grid-cols-4 gap-2 mt-8">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-500 mr-2"></div>
                                <span className="text-sm">Não Iniciado</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                                <span className="text-sm">Em Curso</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-red-600 mr-2"></div>
                                <span className="text-sm">Em Atraso</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-[#008442] mr-2"></div>
                                <span className="text-sm">Concluído</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium">Esforço por pessoa</h3>
                        <div className="flex items-center">
                            <span className="text-sm">1 - 10 de 11</span>
                            <div className="flex ml-2">
                                <button className="border border-gray-300 p-1 rounded-l">
                                    <FaChevronRight className="transform rotate-180" />
                                </button>
                                <button className="border-t border-r border-b border-gray-300 p-1 rounded-r">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Bar
                        data={{
                            ...graficos.esforcoData.chartData,
                            datasets: graficos.esforcoData.chartData.datasets.map(dataset => ({
                                ...dataset,
                                backgroundColor: '#008442'
                            }))
                        }}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        display: true
                                    }
                                },
                                y: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }}
                        height={70}
                    />
                </div>
            </div>
        );
    };
    const renderPessoasView = () => {
        const { pessoas } = project;

        return (
            <div className="mt-4">
                <div className="flex justify-end mb-6">
                    <div className="flex space-x-3">
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>Opções de visualização</span>
                        </button>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <FaFilter className="mr-2" />
                            <span>Filtros (0)</span>
                        </button>
                        <div className="flex items-center space-x-1 border border-gray-300 rounded px-3 py-1.5 text-sm hover:bg-gray-50">
                            <span className="text-gray-700">Agrupar por Grupo</span>
                            <FaChevronDown className="text-gray-500" />
                        </div>
                        <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <span>7 Membros do grupo</span>
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            <FaEllipsisH />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {pessoas.members.filter(m => !m.isAddButton).map((member) => (
                        <div key={member.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="p-4 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden">
                                    <img src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
                                        alt={member.name}
                                        className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-medium">{member.name}</h3>
                                </div>
                            </div>

                            <div className="px-4 pb-2">
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500"
                                        style={{ width: `${member.stats.progress}%` }}
                                    >
                                        {member.stats.delayed > 0 && (
                                            <div className="h-full bg-red-500"
                                                style={{ width: `${Math.min(100, (member.stats.delayed / member.stats.incomplete) * 100)}%` }}>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-t border-gray-200">
                                <div className="p-3">
                                    <div className="text-sm text-gray-500">Incompleto</div>
                                    <div className="font-bold">{member.stats.incomplete}</div>
                                </div>
                                <div className="p-3 border-l border-gray-200">
                                    <div className="text-sm text-gray-500">Em atraso</div>
                                    <div className="font-bold text-red-600">{member.stats.delayed}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-40 flex items-center justify-center">
                        <div className="text-[#008442] flex items-center cursor-pointer">
                            <FaPlus className="mr-2" />
                            <span>Adicionar tarefa</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    {pessoas.tasks.map((section, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex items-center text-gray-700 mb-4">
                                {section.expanded ? (
                                    <FaChevronDown className="mr-2" />
                                ) : (
                                    <FaChevronRight className="mr-2" />
                                )}
                                <span>{section.title}</span>
                                <span className="ml-2 text-gray-500">{section.count}</span>
                            </div>

                            {section.expanded && section.items.map((item) => (
                                <div key={item.id} className="bg-white border border-gray-200 rounded mb-3 p-3 shadow-sm">
                                    <div className="flex items-start">
                                        <div className="mt-1 mr-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                                        </div>
                                        <div className="flex-1">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="py-4">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold mr-4">
                                {projectId}
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{project.detailsTitle || project.name}</h1>
                                <div className="text-sm text-gray-500">{project.dateRange}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-200">
                        {['Grelha', 'Quadro', 'Linha Cronológica', 'Gráficos', 'Pessoas', 'Objetivos'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-3 ${activeTab === tab ? 'text-[#008442] border-b-2 border-[#008442] font-medium' : 'text-gray-600'
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                        <button className="px-4 py-3 text-gray-400">
                            <FaEllipsisH />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 py-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default ProjectDetails;
