/*-------------------------------------------------------
Letter Frequency program 

Definition : 
To count how many time the letter appears in the phrase. 

Method : 
Using `vector` 

Purpose: 
To compare the code in Javascript (found in 04-Loop.js) 
and in C++ which uses unordered_map(see "letterFrequencyC++_unordered_map")
-------------------------------------------------------*/

#include <iostream>
#include <vector>
#include <algorithm>
#include <utility> // pair 


int main(){

// Example string
    std::string phrase = "hello world";

    // Vector to store character frequencies as pairs
    std::vector<std::pair<char,int>> frequencies;

    // Loop through each character in the string
    for (char letter : phrase) {
        // Find if the character already exists in the frequencies vector
        auto it = std::find_if(
                frequencies.begin(), frequencies.end(),[letter](const auto& pair) { return pair.first == letter; });

        if (it != frequencies.end()) {
            // If the character exists, increment its frequency
            it->second++;
        } else {
            // If the character doesn't exist, add it to the frequencies vector
            frequencies.push_back({letter, 1});
        }
    }

    // Print the frequencies
    for (const auto& pair : frequencies) {
        std::cout << pair.first << " : " << pair.second << std::endl;
    }


    return 0;
}



    

