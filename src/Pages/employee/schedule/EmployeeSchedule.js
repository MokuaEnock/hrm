import React, { useState } from 'react';
import './EmployeeSchedule.css';
import EmployeeNavBar from '../navbar/navbar';
import EmployeeHeader from '../header/EmployeeHeader';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'react-tabs';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import BarLoader from 'react-spinners/BarLoader';

const EmployeeSchedule = () => {
  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');
  const numberOfDays = Math.trunc(Math.ceil((endDate - startDate) / 86400000));
  const [loading, setLoading] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [allRequests, setAllRequests] = useState([]);

  const handleAddNewTask = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task: newTask,
        task_description: taskDescription,
      }),
    });
    setNewTask('');
    setTaskDescription('');
    setLoading(false);
  };

  const handleLeaveApplication = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        start_date: startDate,
        end_date: endDate,
        reason_for_leave: reason,
      }),
    });
    setStartDate(null);
    setEndDate(null);
    setReason('');
    setLoading(false);
  };

  return (
    <div className='employee-schedule-container'>
      <EmployeeNavBar />
      <section className='employee-schedule-body'>
        <EmployeeHeader />
        <section className='employee-schedule'>
          <h1>Your Activity</h1>
          <Tabs>
            <TabList className='mt--10'>
              <Tab>Today's Tasks</Tab>
              <Tab>Add New Task</Tab>
              <Tab>Pending Requests</Tab>
              <Tab>Apply for Leave</Tab>
            </TabList>
            <TabPanel>
              <h4>Tasks to accomplish</h4>
              <div className='employee-tasks-container'>
                {allTasks.length ? (
                  allTasks?.map((task) => {
                    return <p>{task.task}</p>;
                  })
                ) : (
                  <p>You don't have any tasks today!</p>
                )}
              </div>
            </TabPanel>
            <TabPanel className='add-new-task-tab'>
              <h4>Create New Task</h4>
              <form onSubmit={handleAddNewTask}>
                <label htmlFor='task'>
                  Title <span className='required-field'>*</span>
                </label>
                <input
                  type='text'
                  name='task'
                  placeholder='Enter title of the task'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  required
                />
                <label htmlFor='description'>Task Description (Optional)</label>
                <textarea
                  name='desctiption'
                  rows='7'
                  placeholder='Write a description of the task'
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
                <button type='submit'>
                  {loading ? <BarLoader color='#36d7b7' /> : 'Add Task'}
                </button>
              </form>
            </TabPanel>
            <TabPanel>
              {' '}
              <h4>Tasks to accomplish</h4>
              <div className='employee-tasks-container'>
                {allRequests.length ? (
                  allRequests?.map((request) => {
                    return <p>{request.request}</p>;
                  })
                ) : (
                  <p>You don't have any pending requests today!</p>
                )}
              </div>
            </TabPanel>
            <TabPanel className='leave-application-tab'>
              <h4>Leave Application</h4>
              <form onSubmit={handleLeaveApplication}>
                <section>
                  <div>
                    <label htmlFor='start'>
                      Start Date <span className='required-field'>*</span>
                    </label>
                    <br />
                    <DatePicker
                      id='date-picker'
                      name='start'
                      value={startDate}
                      onChange={setStartDate}
                      format={'DD/MM/YYYY'}
                      minDate={new DateObject()}
                      placeholder={new DateObject().format('DD/MM/YYYY')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='end'>
                      End Date <span className='required-field'>*</span>
                    </label>
                    <br />
                    <DatePicker
                      id='date-picker'
                      name='end'
                      value={endDate}
                      onChange={setEndDate}
                      format={'DD/MM/YYYY'}
                      minDate={new DateObject().add(1, 'days')}
                      maxDate={new DateObject().add(20, 'days')}
                      placeholder={new DateObject()
                        .add(1, 'days')
                        .format('DD/MM/YYYY')}
                      required
                    />
                  </div>
                  <br />
                  <p>
                    {startDate == null || endDate == null
                      ? 'Select Dates'
                      : numberOfDays <= 0
                      ? 'Invalid selection'
                      : numberOfDays == 1
                      ? numberOfDays + ' day'
                      : numberOfDays + ' days'}
                  </p>
                </section>
                <em style={{ fontSize: '0.8rem' }}>
                  Employee can apply for a minimum of 1 day and maximum of 21
                  days
                </em>
                <section className='leave-application-tab-section'>
                  <label htmlFor='reson'>
                    Reason for leave <span className='required-field'>*</span>
                  </label>
                  <textarea
                    name='reason'
                    rows='6'
                    placeholder='Write your reason for leave application'
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  ></textarea>
                </section>
                <button type='submit'>
                  {loading ? (
                    <BarLoader color='#36d7b7' />
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default EmployeeSchedule;
