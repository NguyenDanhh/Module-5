let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];

let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tuto rial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

// Không trả về
let checkObjectSmaller4 = () => {
    let result = courses.filter((value) =>
        value.rating >= 4
    );
    console.log(result);
}
checkObjectSmaller4()


//Có trả về
let checkObjectBigger4 = () => {
    let result = addedCourses.filter((value) =>
        value.rating < 4
    );
    return result;
}
console.log(checkObjectBigger4())



let mergeArray = (courses , addedCourses ) => {
    let newArray = [...courses , ...addedCourses];
    console.log(newArray);
}

mergeArray(courses , addedCourses);
