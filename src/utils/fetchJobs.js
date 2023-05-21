import axios from "axios";

export const fetchJobs = async() => {
    const data = await axios.get(`${process.env.REACT_APP_URI}/recruiter/getJobs`)
    return data.data
}