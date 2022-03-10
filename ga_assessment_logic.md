# Assessment Logic

## Instructions
- Choose the available case below and you need to solve the case base on this attendance rate:
    - `< 80%` 2 cases
    - `< 75%` 4 cases
    - `< 60%` 6 cases
    - `< 50%` 10 cases
- After you're finish push your works into online repository (e.g Github, Gitlab)
- Do not use any magic built in function (you can google regarding what is built in function)
- Don't forget to fill the submission form [here](https://forms.gle/7fzUFgm3RUzprxfYA)

# CASES
- ## Extract the domain name
    - Create a function that accept single string parameter
    - Your function should be able to extract the domain name from URL that given through the parameter and return the domain name
    - Examples:
        - `yourfunction("http://github.com/subagyo/project-mantab")` will return `github`
        - `yourfunction("https://www.youtube.com/watch?v=YBgWLxbrwMgb")` will return `youtube`
        - `yourfunction("http://https://docs.google.com/document/d/1sx4N0ISPfZqHnK-1cTUDoE-5Wrmz28ShoY")` will return `google`
    ---
- ## What time is it
    - Create a function that accept single string parameter
    - Your function should be able to translate time that given through the parameter to be a sentence that stated the time
    - Special condition
        - if time 12:00 am return `it's  midnight`
        - if time 12:00 pm return `it's noon`
        - else return must be what time is it and it's afternoon or morning
    - Examples:
        - `yourfunction("8:39 am")` will return `It's eight past thirty nine in the morning`
        - `yourfunction("5:22 pm")` will return `It's fivet past twenty two in the afternoon`
    ---
- ## Who is it
    - Create a function that accept two array parameter
    - Those array will contain several name of person
    - Your function should returning the name of person that appears on the both array
    - Examples:
        - array1 = ["Anton","Budi","Kumala","Joko","Dodo"]
        - array2 = ["Kenzo","Syakila","Joko","Anton"]
        - `yourfunction(array1, array2)` will return `["Anton","Joko"]`
    ---
- ## Data processing
    - Create a function that accept single array parameter
    - Array will contain several score
    - Your function should return the information that represent score from the array
    - Return should be an object on the example
    - Special conditions:
        - status will depends of student graduate precentage
        - if greater or equal than 70% status will be "Good Perfomance"
        - else status will be "Under Perfomance"
    - Examples
        ```js
        data = [60, 60, 60, 50]

        yourfunction(data)

        result = {
            status: "Good Perfomance",
            reports: {
                average_score: 57.5
                graduated: 3,
                ungraduated: 1
            }
        }
        ```
    ---
- ## Are there duplicate
    - Create a function that accept several number of parameter
    - The parameters can be only one or more
    - The parameters should be string or integer
    - Your function should be able to determine whether the parameters is duplicate or not
    - Examples:
        - `yourfunction(1, 2, 3, 4)` will return `false`
        - `yourfunction(1, 2, 2, 4)` will return `true`
        - `yourfunction("a","b","c","d","e","f","g)` will return `false`
    ---
- ## Same frequency
    - Create a function that accept two integer parameters
    - Your function should be able to determine whether the frequency of the number on the first parameter and the second parameter are equal
    - Examples:
        - `sameFrequency(182, 281)` will return `true`
        - `sameFrequency(18, 21)` will return `false`
        - `sameFrequency(2, 222)` will return `false`
    ---
- ## Is contain or not
    - Create a function that accept two string parameters
    - Your function should be able to determine whether the string on second parameter is containing each letter from first parameter
    - Examples:
        `yourfunction('hello', 'hello world')` will return `true`
        `yourfunction('sing', 'sting')` will return `true`
        `yourfunction('abc', 'abracadabra')` will return `true`
        `yourfunction('abc', 'acb')` will return `false`
    ---
- ## Is palindrome
    - Create a function that accept single string parameters
    - Your function should be able to determine wheter the string is palindrome or not
    - Palindrome is a words that being reads the same way either in a forward or in a backwards
    - Examples:
        - `yourfunction('awesome')` will return `false`
        - `yourfunction('foobar')` will return `false`
        - `yourfunction('tacocat')` will return `true`
        - `yourfunction('amanaplanacanalpanama')` will return `true`
        - `yourfunction('amanaplanacanalpandemonium')` will return `false`
    ---
- ## Is palindrome integer
    - Create a function that accept single integer parameters
    - Your function should be able to determine wheter the number is palindrome or not
    - Palindrome is a number that reads the same way either in a forward or in a backwards
    - Examples:
        - `(something(1221))` will return `true`
        - `(something(12))` will return `false`
        - `(something(2345432))` will return `true`
        - `(something(88775533557788))` will return `true`
        - `(something(91924561))` will return `false`
    ---
- ## Parse string of array
    - Create a function that accept single string parameters
    - The string parameter will contain a string collection that looks like an array but it's totally string(e.g `"[12, [2, 4],[1,[2,3]], 30]"`)
    - Your function should be able to parse that string to be an actual array
    - Examples:
        - `yourfunction('[]')` will return `[]`
        - `yourfunction('[1]')` will return `[1]`
        - `yourfunction('[12, [2, 4],[1,[2,3]], 30]')` will return `[12, [2,4], [1,[2,3]], 30]`