/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { RiEdit2Fill } from "react-icons/ri";
import EditFacultyPopup from '../../common/editfaculty/page'; // Import the popup component
import { MdModeEditOutline } from "react-icons/md";
import { Bars } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FacultyHomePage = ({ projectNameStatus, presentationStatus, demoStatus = false, successStatus }) => {
    const percentage1 = 75;
    const percentage3 = 90;
    const [subjects, setSubjects] = useState([]);
    const [data, setData] = useState(null);
    const [facultyId, setFacultyId] = useState(null);
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);


    const [showAddModal, setShowAddModal] = useState(false);
    const [newProject, setNewProject] = useState({
        projectName: '',
        doiNumber: '',
        projectDescription: '',
        projectStatus: '',
    });
    const [editProject, setEditProject] = useState({
        doiNumber: '',
        projectName: '',
        projectDescription: '',
        projectStatus: '',
    });
    const [showEditModal, setShowEditModal] = useState(false);
    const [facultyDetails, setFacultyDetails] = useState({
        subjects: [],
        researchProjects: [] // Initialize as an empty array
    });
    const isActive = true;

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        // Fetch facultyId from localStorage
        const storedFacultyId = localStorage.getItem('facultyId');
        if (storedFacultyId) {
            setFacultyId(storedFacultyId);

            fetchFacultyDetails(storedFacultyId);
        }
    }, []);

    const handleEditProject = (project) => {
        setEditProject(project);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditProject(null);
    };

    const handleOpenAddModal = () => {
        setShowAddModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSaveChanges = async (projectID) => {
        try {
            setLoading(true);

            const response = await fetch(`http://localhost:8080/v1/projects/${projectID}/${facultyId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editProject),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to update project: ${errorData.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('Project updated successfully:', data);
            window.location.reload();
            handleCloseModal();
        } catch (error) {
            console.error('Error updating project:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleAddNewProject = async (facultyID) => {
        try {
            const response = await fetch(`http://localhost:8080/v1/projects/add/${facultyID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProject),
            });

            if (!response.ok) {
                throw new Error('Failed to add project');
            }

            handleCloseAddModal();
            setNewProject({
                projectName: '',
                doiNumber: '',
                projectDescription: '',
                projectStatus: '',
            });
            toast.success("Project added successfully");
            setTimeout(() => {
                setLoading(true);

                // Reload window after a delay
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // 2000 milliseconds (2 seconds) delay for reload
            }, 3000);
        } catch (error) {
            console.error('Error adding project:', error.message);
        }
    };


    const handleDeleteProject = async (projectID, projectName) => {
        try {
            await fetch(`http://localhost:8080/v1/projects/${projectID}`, {
                method: 'DELETE',
            });

            // Show success toast notification
            toast.success(`${projectName} deleted  successfully.`);

            // Set loading state after toast notification
            setTimeout(() => {
                setLoading(true);

                // Reload window after a delay
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // 2000 milliseconds (2 seconds) delay for reload
            }, 3000); // 3000 milliseconds (3 seconds) delay for setting loading state
        } catch (error) {
            console.error('Error deleting project:', error);
            toast.error('Failed to delete project.');
        }
    };



    // Example function to fetch faculty details based on facultyId (replace with actual implementation)
    const fetchFacultyDetails = async (facultyId) => {
        try {
            // Example endpoint: replace with your actual API endpoint
            const response = await fetch(`http://localhost:8080/api/v1/adminapp/faculty/${facultyId}`);
            if (response.ok) {
                const data = await response.json();
                setData(data);

                // Filter out only the desired fields
                const filteredDetails = {
                    facultyId: data.facultyID,
                    facultyName: data.facultyName,
                    facultyEmail: data.facultyEmail,
                    fatherName: data.facultyFatherName,
                    motherName: data.facultyMotherName,
                    aadharCard: data.facultyAadharCard,
                    panCard: data.facultyPANCard,
                    pincode: data.facultyPincode,
                    residentialAddress: data.facultyResidentialAddress,
                    city: data.facultyCity,
                    permanentAddress: data.facultyPermanentAddress,
                    collegeId: data.collegeId,
                    collegeCity: data.city,
                    collegeName: data.collegeName,
                    collegePincode: data.zipcode,
                    subjects: data.subjects,
                };
                setFacultyDetails(filteredDetails);
            } else {
                console.error('Failed to fetch faculty details');
            }
        } catch (error) {
            console.error('Error fetching faculty details:', error);
        }
    };





    return (

        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {loading ? (
                <div className="flex justify-center items-center">
                    <Bars
                        height="40"
                        width="40"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <div>
                    <div className='flex mt-2 space-x-2'>
                        {/* First column with 70% width */}
                        <div className='flex bg-slate-50 rounded-lg shadow-lg p-2 border w-full h-full' style={{ flexBasis: '70%' }}>
                            <div className='w-full mt-2'>
                                {/* First row */}
                                <div className='flex w-full'>
                                    {/* First column with the image */}
                                    <div className='flex items-center p-2 bg-white shadow-lg rounded-full'>
                                        <img
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ5PMZUZPaA8_GYEW5XN_--bWQbaXK7ZhXtV4myhhAG376YUTcHIfeItLj9h-gZoBEMg&usqp=CAU'
                                            alt='Profile Image'
                                            width={150}
                                            height={150}
                                            className='rounded-full'
                                        />
                                    </div>
                                    {/* Cards in the first column */}
                                    <div className='flex flex-grow justify-around items-center ml-4'>
                                        <div className='bg-yellow-400 shadow-lg h-32 rounded-lg p-4 m-2 w-1/3 flex flex-col items-center'>
                                            <h2 className=' font-bold uppercase text-md'>Attendance</h2>
                                            <CircularProgressbar
                                                value={percentage1}
                                                text={`${percentage1}%`}
                                                styles={buildStyles({
                                                    textColor: "black",
                                                    pathColor: "black",
                                                    trailColor: "white"
                                                })}
                                                className='w-24 h-24 mt-2'
                                            />
                                        </div>
                                        <div className={`shadow-lg h-32 rounded-lg p-4 m-2 w-1/3 flex flex-col items-center ${isActive ? 'bg-green-600' : 'bg-red-600'}`}>
                                            <h2 className=' font-bold uppercase text-md'>Status</h2>
                                            <h1 className={`mt-4 font-semibold text-center uppercase text-black ${isActive ? '' : 'hidden'} text-sm`}>Active</h1>
                                            <h1 className={`mt-4 font-semibold text-center uppercase text-black ${isActive ? 'hidden' : ''} text-sm`}>Inactive</h1>
                                        </div>
                                        <div className='bg-blue-600 shadow-lg h-32 rounded-lg p-4 m-2 w-1/3 flex flex-col items-center'>
                                            <h2 className=' font-bold uppercase text-md'>Rating</h2>
                                            <CircularProgressbar
                                                value={percentage3}
                                                text={`${percentage3}%`}
                                                styles={buildStyles({
                                                    textColor: "black",
                                                    pathColor: "black",
                                                    trailColor: "white"
                                                })}
                                                className='w-24 h-24 mt-2'
                                            />
                                        </div>
                                    </div>

                                    {isActive && (
                                        <button
                                            className='flex bg-purple-600 items-center w-10 h-10 justify-center hover:bg-purple-800 rounded-full'
                                            onClick={() => setIsPopupOpen(true)} 
                                        >
                                            <RiEdit2Fill color='#fff' />
                                        </button>
                                    )}
                                </div>
                                {/* Second row */}
                                <div className='flex mt-2 items-center justify-center'>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-5 w-full -mt-1  gap-4">

                                            {/* Displaying subjects */}
                                            {Object.entries(facultyDetails).map(([key, value]) => (
                                                key !== 'subjects' && (
                                                    <div className="mb-4" key={key}>
                                                        <label className="block text-gray-700 uppercase text-sm font-bold mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                                        <input
                                                            type="text"
                                                            name={key}
                                                            value={value}
                                                            readOnly
                                                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            required
                                                        />
                                                    </div>
                                                )
                                            ))}

                                            {facultyDetails.subjects.map((subject, index) => (
                                                <div key={index + 1} className="mb-4">
                                                    <label className="block text-gray-700 uppercase text-sm font-bold mb-2">{subject.subjectName}</label>
                                                    <input
                                                        type="text"
                                                        value={`Total Students: ${subject.total}`}
                                                        readOnly
                                                        className="border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        required
                                                    />
                                                    <input
                                                        type="text"
                                                        value={`Passed Students: ${subject.passed}`}
                                                        readOnly
                                                        className="border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        required
                                                    />
                                                    <input
                                                        type="text"
                                                        value={`Failed Students: ${subject.failed}`}
                                                        readOnly
                                                        className="border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        required
                                                    />
                                                </div>
                                            ))}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second column with 30% width */}
                        <div className='flex flex-col bg-slate-50 rounded-lg items-center justify-center shadow-lg p-2 border w-full h-full' style={{ flexBasis: '30%' }}>
                            <div className='flex flex-col mt-1 p-3 bg-purple-600 rounded-lg shadow-lg border items-center'>
                                <Calendar
                                    onChange={setDate}
                                    value={date}
                                />
                            </div>

                            <div className='flex justify-center border w-full bg-slate-50 p-6 shadow-lg rounded-lg mt-2 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 200px)' }}>
                                <div className='flex flex-col items-center w-full'>
                                    <h3 className='flex text-lg text-center justify-center font-bold -mt-4 w-full'>Research Projects</h3>
                                    {data && data.researchProjects && data.researchProjects.length > 0 ? (
                                        data.researchProjects.map((project, index) => (
                                            <div key={index} className={`mt-2  p-3 shadow rounded w-full ${project.projectStatus === 'Completed' ? 'bg-green-500' : (project.projectStatus === 'In Progress' ? 'bg-yellow-400' : '')}`}>
                                                <h4 className='font-semibold'>{project.projectName}</h4>
                                                <p className='text-sm'>{project.projectDescription}</p>
                                                <p className='text-sm italic text-blue-500'>{project.doiNumber || '10.1109/EIRCON51178.2020.9253764'}</p>
                                                <div className='flex space-x-4 mt-1'>
                                                    <button
                                                        className='text-blue-500 italic underline'
                                                        onClick={() => handleEditProject(project)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className='text-red-500 italic underline'
                                                        onClick={() => handleDeleteProject(project.projectID, project.projectName)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        // Display a placeholder if there are no projects or data is not loaded
                                        <div className='text-gray-500 mt-2'>
                                            {data && data.researchProjects ? (
                                                `No research projects found. Click the "+" button to add a new project.`
                                            ) : (
                                                `Loading projects...`
                                            )}
                                        </div>
                                    )}

                                    {/* Plus icon to add new research project */}
                                    {data && data.researchProjects && data.researchProjects.length < 2 && (
                                        <button
                                            className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
                                            onClick={handleOpenAddModal}
                                        >
                                            Add New Project <span className='ml-2'>+</span>
                                        </button>
                                    )}
                                </div>
                                {showEditModal && editProject && (

                                    <div className='fixed inset-0 flex items-center justify-center z-50'>
                                        <div className='bg-white p-6 max-w-md mx-auto rounded-lg shadow-lg'>
                                            <h2 className='text-lg font-bold mb-4'>Edit Project</h2>
                                            <label className='block mb-2'>
                                                Project Name:
                                                <input
                                                    type='text'
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    value={editProject.projectName}
                                                    onChange={(e) => setEditProject({ ...editProject, projectName: e.target.value }, console.log(editProject))
                                                    }
                                                />
                                            </label>
                                            <label className='block mb-2'>
                                                DIO Number:
                                                <input
                                                    type='text'
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    value={editProject.doiNumber || '10.1109/EIRCON51178.2020.9253764'}
                                                    onChange={(e) => setEditProject({ ...editProject, doiNumber: e.target.value })}
                                                />
                                            </label>

                                            <label className='block mb-2'>
                                                Project Description:
                                                <textarea
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    value={editProject.projectDescription}
                                                    onChange={(e) => setEditProject({ ...editProject, projectDescription: e.target.value })}
                                                />
                                            </label>
                                            <label className='block mb-2'>
                                                Project Status:
                                                <select
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    name='projectStatus'
                                                    value={editProject.projectStatus}
                                                    onChange={(e) => setEditProject({ ...editProject, projectStatus: e.target.value })}
                                                >
                                                    <option value=''>Select status...</option>
                                                    <option value='Completed' selected={editProject.projectStatus === 'Completed'}>Completed</option>
                                                    <option value='In Progress' selected={editProject.projectStatus === 'In Progress'}>In Progress</option>
                                                </select>
                                            </label>
                                            {/* Add other fields for editing */}
                                            <div className='flex justify-end mt-4'>
                                                <button
                                                    className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
                                                    onClick={handleCloseModal}
                                                >
                                                    Close
                                                </button>
                                                {/* Save changes button */}
                                                <button
                                                    className='bg-green-500 text-white px-4 py-2 rounded-md'
                                                    onClick={() => handleSaveChanges(editProject.projectID)}
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Saving...' : 'Save Changes'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Add Project Modal */}
                                {showAddModal && (
                                    <div className='fixed inset-0 flex items-center justify-center z-50'>
                                        <div className='bg-white p-6 max-w-md mx-auto rounded-lg shadow-lg'>
                                            <h2 className='text-lg font-bold mb-4'>Add New Project</h2>
                                            <label className='block mb-2'>
                                                Project Name:
                                                <input
                                                    type='text'
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    name='projectName'
                                                    value={newProject.projectName}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label className='block mb-2'>
                                                DIO Number:
                                                <input
                                                    type='text'
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    name='doiNumber'
                                                    value={newProject.doiNumber}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label className='block mb-2'>
                                                Project Description:
                                                <textarea
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    name='projectDescription'
                                                    value={newProject.projectDescription}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            <label className='block mb-2'>
                                                Project Status:
                                                <select
                                                    className='border-gray-300 border rounded-md px-3 py-2 w-full mt-1'
                                                    name='projectStatus'
                                                    value={newProject.projectStatus}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value=''>Select status...</option>
                                                    <option value='Completed'>Completed</option>
                                                    <option value='In Progress'>In Progress</option>
                                                </select>
                                            </label>
                                            <div className='flex justify-end mt-4'>
                                                <button
                                                    className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
                                                    onClick={handleCloseAddModal}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className='bg-green-500 text-white px-4 py-2 rounded-md'
                                                    onClick={() => handleAddNewProject(facultyId)}
                                                    disabled={!newProject.projectName || !newProject.projectDescription || !newProject.projectStatus}
                                                >
                                                    Add Project
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        {/* Popup for editing faculty details */}

                    </div>
                    <EditFacultyPopup
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                        facultyDetails={facultyDetails}
                        data={data}
                        subjects={subjects}


                    />
                </div>
            )}
        </div>


    );
};

export default FacultyHomePage;