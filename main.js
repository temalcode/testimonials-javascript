
const testimonialsData = [
    {
        "personName": "Jhon Doe",
        "feedback": "Nice work on your . It's all good. Thanks to , we've just launched our 5th website!"
    },
    {
        "personName": 'Jhon Simith',
        "feedback": "Fantastic, I'm totally blown away by Testimonial Generator."
    },
    {
        "personName": "Rick E.",
        "feedback": "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!"
    },
    {
        "personName": "Nettie C.",
        "feedback": "Man, this thing is getting better and better as I learn more about it. I love\. I will refer everyone I know. I use\often"
    }
]

const personName = document.getElementById('personName')
const para = document.getElementById('para')
const nextButton = document.getElementById('nextBtn')
const prevButton = document.getElementById('prevBtn')

let count = 0;

personName.innerText = testimonialsData[count].personName
para.innerText = testimonialsData[count].feedback

function getPerson() {
    personName.innerText = testimonialsData[count].personName
    para.innerText = testimonialsData[count].feedback
}

nextButton.addEventListener('click', () => {
    count++
    if(count > testimonialsData.length - 1){
        count = testimonialsData.length - 1
    }
    getPerson()
})

prevButton.addEventListener('click', () => {
    count--
    if(count < 0){
        count = 0
    }
    getPerson()
})
