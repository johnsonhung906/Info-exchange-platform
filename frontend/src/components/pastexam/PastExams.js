import React, { useState, useRef, useCallback, useEffect } from "react";
import HashLoader from 'react-spinners/HashLoader';
import MainPageTopBar from '../MainPageTopBar';
import FileTable from './FileTable';
import Search from "./Search";
import Upload from './Upload';
import instance from '../../axios';

function createData(name, test, year) {
    return { name, test, year };
}

const rows = [
    createData('Final', 'final', 2020),
    createData('Donut', 'midterm1', 2021),
    createData('Eclair', 'midterm2', 2021),
    createData('Final', 'final', 2020),
    createData('Donut', 'midterm1', 2021),
    createData('Eclair', 'midterm2', 2021),
    createData('Final', 'final', 2020),
    createData('Donut', 'midterm1', 2021),
    createData('Eclair', 'midterm2', 2021),
    createData('Donut', 'midterm1', 2021),
    createData('Eclair', 'midterm2', 2021),
    createData('Final', 'final', 2020),
    createData('Donut', 'midterm1', 2021),
    createData('Eclair', 'midterm2', 2021),
].sort((a, b) => (a.test < b.test ? -1 : 1));


function PastExams(props) {
    const {userinfo,log_in} = props; 
    const [loading, setLoading] = useState(true);
    const [files, setFlies] = useState([]);
    const [courses, setCourses] = useState([]);
    
    const getcourse = async(which, keyword) => {
        // const keyword = classname;
        const {
          data : {message, final}
        } = await instance.post('api/search', {
          which, keyword
        });
        setCourses(final)
      }
  
    useEffect(()=>{
        //get course info from backend
        getcourse(1, "")
    }, [])

    useEffect(()=>{
        const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000))
        setLoading((loading) => !loading)
        }
        loadData()
    }, [])

    if (loading) {
        return (
        <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <HashLoader size={100}/>
        </div>
        )
    }
    else {
        return (
            <div style={{backgroundColor:'#f7f3f3'}}>
                <MainPageTopBar log_in = {log_in}/>
                <div style={{marginLeft: "80px", marginTop: "70px", float:"left"}}>
                    <Search setFlies={setFlies} courses={courses}/>
                </div>
                <div style={{marginRight: "100px", marginTop: "70px", float:"right"}}>
                    <Upload courses={courses}/>
                </div>

                <div style={{marginLeft: "70px", marginRight: "70px",marginTop: "130px"}}>
                    <FileTable rows={files}/>
                </div>
            </div>
        );
    }
};

export default PastExams;