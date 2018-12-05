#include <iostream>
#include <fstream>
#include <string>
#include <map>
#include <vector>
using namespace std;

int main () {
    string line;
    ifstream myfile ("input.txt");
    if (myfile.is_open()) {
        // part 1
        int two = 0;
        int three = 0;
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
        cout << "part 1: " << two * three << endl;

        // part 2
        myfile.clear();
        myfile.seekg(0);
        vector<string> lines;
        while (getline (myfile,line)) {
            for (auto it = lines.begin(); it != lines.end(); ++it) {
                int differences = 0;
                int last_hit_index = -1;
                for (int i = 0; i < line.length(); i++) {
                    if (line[i] != (*it)[i]) {
                        differences++;
                        last_hit_index = i;
                    }
                }
                if (differences == 1) {
                    cout << "part 2: " << line.erase(last_hit_index, 1) << endl;
                    return 0;
                }
            }
            lines.push_back(line);
        }


        myfile.close();

    }

    else cout << "Unable to open file";

    return 0;
}
