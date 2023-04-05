string = "   testing dumb  spacing"


def reverse_string(string):
    reversed_string = ''
    for i in range(len(string), 0, -1):
        reversed_string += string[i-1]
    return reversed_string


def acronymize(string):
    acronym = ''
    for i in range(0, len(string), 1):
        if string[i] != ' ' and (string[i-1] == ' ' or string[i-1] == None):
            acronym += string[i]
    return acronym.upper()


print(reverse_string(string))
print(acronymize(string))
