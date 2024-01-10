<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md">
            <h1 class="text-4xl font-bold mb-6">Welcome to Our Cookie Blog</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Card 1: Cookies Page -->
                <div class="bg-gray-200 p-6 rounded-md shadow-md flex flex-col items-center">
                    <img src="http://localhost:8000/storage/images/default_img.jpg" alt="Cookies Image"
                        class="mb-4 rounded-md" />
                    <h2 class="text-xl font-semibold mb-2">Best Cookie - {{ employeeList.Employee }}</h2>
                    <p class="text-gray-700 mb-4">
                        Dive into our collection of mouth-watering cookie recipes and indulge in the joy of baking.
                    </p>
                    <router-link to="/employee" class="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600">
                        Explore Cookies
                    </router-link>
                </div>

                <!-- Card 2: About Page -->
                <div class="bg-gray-200 p-6 rounded-md shadow-md flex flex-col items-center">
                    <img src="http://localhost:8000/storage/images/default_img.jpg" alt="Cookies Image"
                        class="mb-4 rounded-md" />
                    <h2 class="text-xl font-semibold mb-2">Get to Know Us</h2>
                    <p class="text-gray-700 mb-4">
                        Discover the story behind our cookie blog and the passionate individuals who share their love for
                        cookies.
                    </p>
                    <router-link to="/about" class="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600">
                        About Us
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useEmployee } from '@/stores/employee'

export default {
    setup() {
        const employeeList = useEmployee();
        return { employeeList };
    },
    mounted() {
        this.employeeList.updateEmployee('Sunner Employee');
        console.log("best employee ", this.employeeList.Employee);
    }
}
</script>
  
<style scoped></style>