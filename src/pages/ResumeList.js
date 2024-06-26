import React from 'react';
// import './ResumeList.css';
import '../index.css';
import ResumeView from './ResumeView';
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ResumeList = ( props ) => {
  const navigate=useNavigate();
  const data=props.data
  const list_name=props.list_name
  console.log(list_name)
  console.log(data)
  const handleResumeClick = (resume_id) => {
    navigate(`/resume/${resume_id}`);
  };
  return (
    <div className="resume-list-container">
    <div className="resume-list" >
      {data.map((item, index) => (
        <div key={index} className="resume-item" onClick={() => handleResumeClick(item.resume_id)}        >
          <div><strong>Rank: </strong> {index+1}</div>
          <div><strong>Score:</strong> {item.score}</div>
          <div><strong>Institution:</strong> {item.education.institution}</div>
          {item.CP.leetCode && (
            <div><strong>LeetCode Score:</strong> {item.CP.leetCode}</div>
          )}
          <div><strong>Resume ID:</strong> {item.resume_id}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ResumeList;
