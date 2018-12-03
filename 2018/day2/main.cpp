#include <iostream>
#include <fstream>
#include <string>
#include <map>
using namespace std;

int main () {
    string line;
    ifstream myfile ("input.txt");
    int two = 0;
    int three = 0;
    if (myfile.is_open()) {
        while (getline (myfile,line)) {
            map<char, int> letters;
            for(char& c : line) {
                if (letters.find(c) != letters.end()) {
                    letters[c] = letters[c] + 1;
                } else {
                    letters[c] = 1;
                }
            }
            bool has2 = false;
            bool has3 = false;
            for (auto it = letters.begin(); it != letters.end(); ++it) {
                if (!has2 && it->second == 2) {
                    two++;
                    has2 = true;
                } else if (!has3 && it->second == 3) {
                    three++;
                    has3 = true;
                }
            }
        }
        myfile.close();

        cout << two << ' ' << three << endl;
        cout << two * three << endl;
    }

    else cout << "Unable to open file";

    return 0;
}
