import requests
from django.conf import settings

class AirtableService:
    base_url = f'https://api.airtable.com/v0/{settings.AIRTABLE_BASE_ID}/{settings.AIRTABLE_TABLE_NAME}'
    headers = {
        'Authorization': f'Bearer {settings.AIRTABLE_API_KEY}',
        'Content-Type': 'application/json'
    }

    @staticmethod
    def get_issues():
        response = requests.get(AirtableService.base_url, headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def create_issue(issue_data):
        response = requests.post(AirtableService.base_url, json={'fields': issue_data}, headers=AirtableService.headers)
        response.raise_for_status()
        return response.json()
