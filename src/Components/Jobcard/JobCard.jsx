import React from 'react';
import dayjs from 'dayjs';
import useGetdata from '../../hooks/useGetdata';

function JobCard(props) {
  const b = useGetdata();
  const { jobs } = b;
  console.log(jobs);
  const today = dayjs();

  return (
    <div className="mx-40 mb-4">
      {jobs.map((job) => {
        const differenceindays = today.diff(job.postedOn, 'days');
        console.log(differenceindays);
        return (
          <div className="box" key={job.id}>
            {/* child1 */}
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-lg font-bold">{job.title} - {job.company}</h1>
              <p className="text-slate-600 my-3 font-semibold">{job.type} &#x2022; {job.experience} &#x2022; {job.location}</p>
              <div className="flex items-center gap-2">
                {job.skills.map((x) => (
                  <p className="text-gray-500 py-1 px-2 rounded-md border font-semibold border-black" key={x}>{x}</p>
                ))}
              </div>
            </div>

            {/* child2 */}
            <div className="flex gap-4 items-center">
              <p className="text-gray-500 text-lg font-medium">Posted {differenceindays} days ago</p>
              <button className="text-blue-500 border font-medium py-4 px-10 rounded-md border-blue-500 hover:bg-blue-500 hover:text-white">Apply</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobCard;
