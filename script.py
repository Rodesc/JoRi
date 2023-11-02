import csv
import json

def csv_to_json(csv_file, json_file):
    data_list = []

    with open(csv_file, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        id_value = 0
        for row in csv_reader:
            coordinates_str = row.get('Koordinates', '0,0')
            coordinates = [float(coord) if coord.strip() else 0.0 for coord in coordinates_str.split(',')]
            
            if id_value == 200:
                break
            
            id_value += 1 

            data = {
                'id': id_value,
                'coords': {
                    'lat': coordinates[0] if len(coordinates) >= 1 else 0.0,
                    'lng': coordinates[1] if len(coordinates) >= 2 else 0.0,
                },
                'title': row.get('Adrese', 'No Title'),
                'description': row.get('Piezimes', 'No Description'),
                'images': [
                    "https://www.w3schools.com/howto/img_nature_wide.jpg",
                    "https://www.w3schools.com/howto/img_snow_wide.jpg",
                    "https://www.w3schools.com/howto/img_lights_wide.jpg",
                ],
                'comments': [
                    {
                        'id': 1,
                        'name': 'John Doe',
                        'text': 'This is a comment',
                    },
                    {
                        'id': 2,
                        'name': 'Jane Doe',
                        'text': 'This is another comment',
                    },
                ],
            }
            data_list.append(data)

    with open(json_file, 'w', encoding='utf-8') as json_file:
        json.dump(data_list, json_file, ensure_ascii=False, indent=4)

# Replace 'input.csv' and 'output.json' with your actual file paths
csv_to_json('data_to_insert.csv', 'output.json')
