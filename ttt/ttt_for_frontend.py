from browser import console
from browser import document
from browser import alert
import json
import ttt
import copy

def new_div():
    div = document.createElement('div')
    return div

def new_span(text):
    span = document.createElement('span')
    span.textContent = text
    return span

def check_won(won, player_index):
    if won:
        alert(f'Player {str(player_index+1)} has won!')

def take_move(event):
    global t
    global board_size
    # console.log(event.target['data-x'])
    # console.log(event.target['data-y'])
    player_index = t.whose_turn()
    won = t.take(int(event.target['data-x']), int(event.target['data-y']))
    console.log(t.get_board())
    clear_board()
    display_board(t, board_size, check_won, (won, player_index))

def new_empty_cell(x, y):
    a = document.createElement('a')
    s = new_span('█')
    s.attrs['data-x'] = x
    s.attrs['data-y'] = y
    a.appendChild(s)
    a.bind('click', take_move)
    return a

def new_clicked_cell(cell_value):
    s = new_span('O' if cell_value == 0 else 'X')
    return s

def cell_code_to_presentation(cell_code_in_int):
    return '█'

def clear_board():
    b = document['board']
    while b.firstChild:
        b.firstChild.remove()

def display_board(ttt_obj, board_size, callback, args):
    board_as_html(document['board'], ttt_obj.get_board(), board_size, callback, args)

def board_as_html(dom_board, ttt_board, board_size, callback, args):
    # first row for coordinates
    span = document.createElement('span')
    span.textContent = '  ' + ' '.join([str(i) for i in range(board_size)])
    dom_board.appendChild(span)
    line_break = document.createElement('br')
    dom_board.appendChild(line_break)

    for y, row in enumerate(ttt_board):
        d = new_div()
        s = new_span(str(y))
        d.appendChild(s)
        s = new_span(' ')
        d.appendChild(s)
        for x, cell_value in enumerate(row):
            if cell_value < 0:
                a = new_empty_cell(x,y)
                d.appendChild(a)
            else:
                d.appendChild(new_clicked_cell(cell_value))
            s = new_span(' ')
            d.appendChild(s)

        # for cell in row 

        # span = document.createElement('span')
        # span.textContent = str(i) + ' ' + ' '.join(map(cell_code_to_presentation, row))
        dom_board.appendChild(d)

        # line_break = document.createElement('br')
        # dom_board.appendChild(line_break)

    if callback != None:
        callback(*args)

# def board_as_html(dom_board, ttt_board, board_size):
#     # first row for coordinates
#     span = document.createElement('span')
#     span.textContent = '  ' + ' '.join([str(i) for i in range(board_size)])
#     dom_board.appendChild(span)
#     line_break = document.createElement('br')
#     dom_board.appendChild(line_break)

#     for i, row in enumerate(ttt_board):
#         span = document.createElement('span')
#         # span.textContent = str(i) + ' ' + ' '.join(map(cell_code_to_presentation, row))
#         dom_board.appendChild(span)

#         line_break = document.createElement('br')
#         dom_board.appendChild(line_break)

def main():
    global board_size
    board_size = 3
    global t
    t = ttt.TTT(board_size)
    console.log(t.get_board())
    display_board(t, board_size, None, None)
