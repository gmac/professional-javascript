# Gryffindor House

Gryffindor needs help keeping track of the points awarded to their students. Let's build a simple program to assist.

## Objectives

 - Work with objects and functions.
 - Work with the "this" keyword.

## Process

Review the provided JavaScript and note the `Gryffindor` object declaration and its empty methods. We want to configure the Gryffindor object to do the following:

### 1. Fill in the `addStudent` method(s)

```
Gryffindor.addStudent("Harry Potter");

// BONUS:
Gryffindor.addStudents("Ron Weasley", "Hermionie Granger");
```

These methods should add student objects to Gryffindor's `students` array. A new student object should be formatted as:

```
{
  name: "Harry Potter",
  points: 0
}
```

### 2. Fill in the `getStudent` method

```
Gryffindor.getStudent("Harry Potter");

// returns -> {name: "Harry Potter", points: 0}
// or returns null if student isn't in the house.
```

Gets an existing student object by name from the array of students. You'll need to loop through the students array until you find a student with a matching name.
      
### 3. Fill in the `awardPointsTo` method

```
Gryffindor.awardPointsTo("Ron Weasley", 25);
```

Gets a student by name, and then add points to that student. Use the "getStudent" method to access the student object, and then add points to it.
      

### 4. Fill in the `getHousePoints` method

```
Gryffindor.getHousePoints();
```

Gets the total points among all students in the house. You'll need to loop through all student objects and tally up their points.