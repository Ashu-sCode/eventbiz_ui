import React, { useEffect, useState } from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [showstuform, setShowstuform] = useState(false);
  const [showfacform, setShowfacform] = useState(false);
  const [showeveform, setShoweveform] = useState(false);

  const [studentsList, setStudentsList] = useState([]);
  const [facultyList, setFacultyList] = useState([]);
  const [events, setEvents] = useState([]);
  const [registerdata, setRegisterdata] = useState([]);

  useEffect(() => {
    // 🔧 MOCK DATA INSTEAD OF FETCH
    const mockStudents = [
      { name: "Student A", roll: "123" },
      { name: "Student B", roll: "456" }
    ];
    setStudentsList(mockStudents);

    const mockFaculty = [
      { name: "Faculty X", department: "CSE" },
      { name: "Faculty Y", department: "ECE" }
    ];
    setFacultyList(mockFaculty);

    const mockEvents = [
      { name: "TechFest" },
      { name: "Seminar" },
      { name: "Workshop" }
    ];
    setEvents(mockEvents);

    const mockRegisterData = [
      {
        roll_no: "202301",
        branch: "Computer science",
        email: "ashu@example.com",
        event: "TechFest"
      },
      {
        roll_no: "202302",
        branch: "Electrical",
        email: "geeta@example.com",
        event: "Seminar"
      },
      {
        roll_no: "202303",
        branch: "Mechanical",
        email: "karan@example.com",
        event: "Workshop"
      }
    ];
    setRegisterdata(mockRegisterData);

    // 💬 You can comment out the failing fetches if needed
    /*
    const fetchStudents = async () => {
      try {
        const getRes = await fetch('https://eventbiz.up.railway.app/api/students');
        const updatedList = await getRes.json();
        setStudentsList(updatedList);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };

    const fetchFaculty = async () => {
      try {
        const getres = await fetch('https://eventbiz.up.railway.app/api/faculty');
        const updatedlist = await getres.json();
        setFacultyList(updatedlist);
      } catch (error) {
        console.error('Failed to fetch Faculty:', error);
      }
    };

    const fetchevents = async () => {
      try {
        const getres = await fetch('https://eventbiz.up.railway.app/api/events');
        const resdata = await getres.json();
        setEvents(resdata);
      } catch (err) {
        console.log('failing to fetch events', err);
      }
    };

    const fetchregisterdata = async () => {
      try {
        const data = await fetch('https://eventbiz.up.railway.app/api/register');
        const resdata = await data.json();
        setRegisterdata(resdata);
      } catch (err) {
        console.log('failing to fetch register data', err);
      }
    };

    fetchStudents();
    fetchFaculty();
    fetchevents();
    fetchregisterdata();
    */
  }, []);

  return (
    <Context.Provider
      value={{
        studentsList,
        setStudentsList,
        facultyList,
        setFacultyList,
        setEvents,
        events,
        showstuform,
        setShowstuform,
        setShowfacform,
        showfacform,
        setShoweveform,
        showeveform,
        registerdata,
        setRegisterdata
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
