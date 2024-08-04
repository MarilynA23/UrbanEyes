from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import AirtableService
import requests

class IssueListView(APIView):
    def get(self, request):
        try:
            issues = AirtableService.get_issues()
            return Response(issues, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            new_issue = AirtableService.create_issue(request.data)
            return Response(new_issue, status=status.HTTP_201_CREATED)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserDetailsView(APIView):
    def get(self, request):
        try:
            user = AirtableService.get_user_details()
            return Response(user, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            new_user = AirtableService.create_user_details(request.data)
            return Response(new_user, status=status.HTTP_201_CREATED)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
