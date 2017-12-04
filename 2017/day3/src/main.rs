fn main() {
    aoc3_d1(361527);
}

#[derive(Debug)]
struct Cell {
    n: u32,
    x: i32,
    y: i32,
}

#[derive(Debug)]
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

fn aoc3_d1(num: u32) {

    let max = num+1;
    let mut board: Vec<Cell> = Vec::new();

    let mut x = 0;
    let mut y = 0;

    let mut order = Direction::RIGHT;
    let mut speed = 1;
    let mut velocity = 0;

    for i in 1..max {
        board.push(Cell {
            n: i,
            x: x,
            y: y,
        });
        velocity += 1;

        match order {
            Direction::RIGHT => {
                if velocity == speed {
                    // no speed
                    velocity = 0;
                    order = Direction::UP;
                }
                x += 1;
            }
            Direction::UP => {
                if velocity == speed {
                    speed += 1;
                    velocity = 0;
                    order = Direction::LEFT;
                }
                y -= 1;
            }
            Direction::LEFT => {
                if velocity == speed {
                    // no speed
                    velocity = 0;
                    order = Direction::DOWN;
                }
                x -= 1;
            }
            Direction::DOWN => {
                if velocity == speed {
                    speed += 1;
                    velocity = 0;
                    order = Direction::RIGHT;
                }
                y += 1;
            }

        }

    }

    let &Cell {x: a, y: b, n: _} = board.last().unwrap();

    println!("{:?}", a.abs() + b.abs());
}
