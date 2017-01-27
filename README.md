#Jet Fuel

###The main aim of this project was to create a URL shortener service.

This application allows users to create folders (like bookmark folders) to store long, ugly URLs as shortened URLs through our service.

The main goal of this application was to redirect a request at the shortened URL to a user's long URL equivalent. Each shortened URL is belong to a unique folder which is capable of storing "n" URLs.

The secondary goal was to track URL usage and provide popularity statistics.

---

####We considered 3 main criteria, each with questions to guide the application's design and implementation: 

###1. Code Clarity

Is the application consistent with other applications you have written or seen?
Are the files of the application laid out in a logical manner?
Does the code within each file directly relate to the name of the file and location within the application?
Is the code clearly laid out?
Does each method accomplish their intended task or do they do more than intended?

###2. Server-side Code

Does each route handle a single operation?
Are there a small number of instance variables defined?
Could multiple of the instance variables be represented with a singular concept/object?
Are your routes “RESTful”?
Are your urls stored to the correct folder database?

###3. Tests

Are all aspects of the application well-tested?
Do the tests run? Are there failures?
Are the tests within the test file directly related to the file they are testing?
Is it clear what code is under test?
Is it clear what scenario is being tested?
Is it clear the expected results of the scenario?
Is there a lot of repetition of setup/teardown in the tests?

---
