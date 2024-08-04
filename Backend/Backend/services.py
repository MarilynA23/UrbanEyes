import requests
from django.conf import settings

class AirtableService:
    base_url = f'https://api.airtable.com/v0/{settings.AIRTABLE_BASE_ID}/'
    headers = {
        'Authorization': f'Bearer {settings.AIRTABLE_API_KEY}',
        'Content-Type': 'application/json'
    }

    @staticmethod
    def get_issues():
        response = requests.get(AirtableService.base_url+f'{settings.AIRTABLE_TABLE_NAME}', headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def create_issue(issue_data):
        response = requests.post(AirtableService.base_url+f'{settings.AIRTABLE_TABLE_NAME}', json={'fields': issue_data}, headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def get_user_details():
        response = requests.get(AirtableService.base_url+f'{settings.USER_DETAILS_TABLE}', headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()
    
    @staticmethod
    def create_user_details(user_data):
        city_name = user_data.get('City')
        city_id = AirtableService.get_city_id(city_name)
        print(city_id)
        if city_id:
            user_data['City'] = [city_id]
        response = requests.post(AirtableService.base_url+f'{settings.USER_DETAILS_TABLE}', json={'fields': user_data}, headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def get_city_id(city_name):
        response = requests.get(AirtableService.base_url+f'{settings.CITIES_TABLE}', headers=AirtableService.headers)
        response.raise_for_status()
        cities = response.json().get('records', [])
        for city in cities:
            if city['fields'].get('City') == city_name:
                return city['id']
        return None