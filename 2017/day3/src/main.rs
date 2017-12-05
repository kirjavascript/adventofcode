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

fn main() {
    let input = 361527;
    aoc3(input, |i, _, _, _| i); // part 1
    aoc3(input, |_, board, x, y| {
        let mut qty = 0;
        for cell in (&board).iter() {
            let &Cell {x: dx, y: dy, n: dn} = cell;
            if (x == dx-1 && (y == dy || y == dy-1 || y == dy + 1)) || (x == dx+1 && (y == dy || y == dy-1 || y == dy + 1)) || (y == dy + 1 && x == dx) || (y == dy - 1 && x == dx) {
                qty += dn;
            }
        }
        qty
    }); // part 2
}

fn aoc3(num: u32, func: fn(u32, &mut Vec<Cell>, i32, i32) -> u32) {

    let max = num+1;
    let mut board: Vec<Cell> = Vec::new();

    let mut x = 0;
    let mut y = 0;

    let mut order = Direction::RIGHT;
    let mut speed = 1;
    let mut velocity = 0;

    for _i in 1..max {
        let qty;
        if x == 0 && y == 0 {
            qty = 1;
        }
        else {
            qty = func(_i, &mut board, x, y);
        }
        if qty > num {
            println!("part 2: {}", qty);
            return;
        }

        board.push(Cell {
            n: qty,
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
    println!("part 1: {:?}", a.abs() + b.abs());
}
