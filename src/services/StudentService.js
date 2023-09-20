import axios from 'axios';
import { rj } from 'react-rocketjump'


export const getStudents = rj({
  effectCaller: rj.configured(),
  effect: (token) => () =>
  axios.get(`${process.env.REACT_APP_API_URL}students/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then(response => response.data)
})

export function deleteStudent(studentId) {
  return axios.delete(`${process.env.REACT_APP_API_URL}students/${studentId}/`, {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addStudent(student){
  return axios.post(`${process.env.REACT_APP_API_URL}students/`, {
    studentId:null,
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    RegistrationNo:student.RegistrationNo.value,
    Email:student.Email.value,
    Course:student.Course.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put(`${process.env.REACT_APP_API_URL}students/${stuid}/`, {
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    RegistrationNo:student.RegistrationNo.value,
    Email:student.Email.value,
    Course:student.Course.value
  })
   .then(response => response.data)
}
