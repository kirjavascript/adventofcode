
fn main() {
    // let x: [[u32; 2]; 10] = [[0; 2]; 10];

    aoc3_d1(361527);
}

fn aoc3_d1(num: u32) {

    let mut top = 0;
    let mut left = 0;

    let mut order = 1;
    let mut skip = false;
    let mut direction = 0;

    for _ in 0..num {// right up left down

        if direction == 0 {
            left += order;
        }
        else if direction == 1 {
            top -= order;
        }
        else if direction == 2 {
            left -= order;
        }
        else if direction == 3 {
            top += order;
        }
        direction = (direction + 1) % 4;

        if !skip {
            skip = true;
        }
        else {
            order += 1;
        }

    }

}
