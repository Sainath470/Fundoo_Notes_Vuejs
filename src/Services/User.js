import AxiosService from '../Services/Axios';
const axios = new AxiosService()

export default {
    userRegister(data) {
        return axios.postData("/auth/register", data)
    },
    userLogin(data) {
        return axios.postData("/auth/login", data)
    },
    userForgotPassword(data) {
        return axios.postData("/auth/forgotPassword", data)
    },
    userResetPassword(data) {
        return axios.postData("/auth/resetPassword", data)
    },
    userCreateNote(data) {
        return axios.postData("/auth/addNotes", data)
    },
    userDisplayNotes() {
        return axios.getData("/auth/getNotes")
    },
    userUpdateNote(data) {
        return axios.updateData("/auth/updateNote", data)
    },
    userDeleteNote(data) {
        return axios.userTrash("/auth/deleteNoteFromDisplayNotes", data)
    },
    userDisplayNotesInTrash(data) {
        return axios.getData("/auth/trashNotes", data)
    },
    userDeleteNoteForever(data) {
        return axios.postData("/auth/deleteNoteForever", data)
    },
    userRestoreNote(data) {
        return axios.postData("/auth/restoreNote", data)
    }
}