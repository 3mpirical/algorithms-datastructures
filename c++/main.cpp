#include <iostream>
#include <string>

int main() {

    double numInput;

    std::cout << "\nWhat is your favorite number?\n";
    std::cout << "> ";

    std::cin >> numInput;

    std::cout << "That's my favorite number too!\n";
    std::cout << "No really " << numInput << " is my favorite number too!" << std::endl;

    return 0;
}