import { defineStore } from "pinia";
import axios from "axios";
export const useCookies = defineStore('cookies', {
    state: () => ({
        companyName: 'Super Cookie',
        cookies: [],
        bestCookie: '',
    }),
    getters: {
        getBestCookie() {
            return this.bestCookie;
        }
    },
    actions: {
        async refreshCookies() {
            const data = await axios.get('http://localhost:8000/api/test_employees');
            this.cookies = data.data.employees;
            console.log("refresh cookies");
        },
        updateBestCookie(bestCookie) {
            this.bestCookie = bestCookie;
            console.log("Update best cookie ", bestCookie);
        }
    }
})