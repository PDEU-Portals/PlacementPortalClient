import axios from "axios";

export const fetchJobs = async() => {
    const data = await axios.get("http://localhost:5000/api/v1/recruiter/getJobs")
    return data.data
}