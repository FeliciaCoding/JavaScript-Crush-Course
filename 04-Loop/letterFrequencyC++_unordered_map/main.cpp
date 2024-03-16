/*-------------------------------------------------------
Letter Frequency program 

Definition : 
To count how many time the letter appears in the phrase. 

Method : 
Using `an unordered_map,` which is similar to Javascript's `Object`

Purpose: 
To compare the code in Javascript (found in 04-Loop.js) and in C++ which uses vectors
-------------------------------------------------------*/

#include <iostream>
#include <unordered_map>
#include <string>

int main() {
    // Declare an unordered_map to store character frequencies
    std::unordered_map<char, int> frequencies;

    // Example string
    std::string phrase = "hello world";

    // Loop through each character in the string
    for (char letter : phrase) {
        // Increment the frequency of the character
        frequencies[letter]++;
    }

    // Print the frequencies
    for (const auto& pair : frequencies) {
        std::cout << pair.first << " : " << pair.second << std::endl;
    }

    return 0;
}
