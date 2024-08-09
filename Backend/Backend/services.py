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
        user_name = issue_data.get('Username')
        # print(user_name)
        user_id = AirtableService.get_particular_user_id(user_name)
        # print(city_id)
        if user_id:
            issue_data['Username'] = [user_id]
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
    
    @staticmethod
    def get_particular_user_id(username):
        response = requests.get(AirtableService.base_url+f'{settings.USER_DETAILS_TABLE}', headers=AirtableService.headers)
        response.raise_for_status()
        users = response.json().get('records', [])
        for user in users:
            if user['fields'].get('Username') == username:
                return user['id']
        return None
    
    @staticmethod
    def get_particular_user_details(username):
        response = requests.get(AirtableService.base_url+f'{settings.USER_DETAILS_TABLE}', headers=AirtableService.headers)
        response.raise_for_status()
        users = response.json().get('records', [])
        for user in users:
            if user['fields'].get('Username') == username:
                return user['fields']
        return None
    
    @staticmethod
    def get_user_issues(username):
        response = requests.get(AirtableService.base_url+f'{settings.AIRTABLE_TABLE_NAME}', headers=AirtableService.headers)
        response.raise_for_status()
        user_id = AirtableService.get_particular_user_id(username)
        issues = response.json().get('records', [])
        result = []
        for issue in issues:
            if issue['fields'].get('Username') == [user_id]:
                result.append(issue)
        print(result)
        return result
    
    @staticmethod
    def get_issue_in_city(username):
        user_details = AirtableService.get_particular_user_details(username)
        city_id = user_details['City']
        print(city_id)
        response = requests.get(AirtableService.base_url+f'{settings.USER_DETAILS_TABLE}', headers=AirtableService.headers)
        response.raise_for_status()
        users = response.json().get('records', [])
        result = []
        print(users)
        for user in users:
            if user['fields'].get('City') == city_id:
                result.extend(AirtableService.get_user_issues(user['fields'].get('Username')))
        return result
    
    @staticmethod
    def update_user_details(record_id, user_data):
        city_name = user_data.get('City')
        city_id = AirtableService.get_city_id(city_name)
        if city_id:
            user_data['City'] = [city_id]
        url = f"{AirtableService.base_url}{settings.USER_DETAILS_TABLE}/{record_id}"
        response = requests.patch(url, json={'fields': user_data}, headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()