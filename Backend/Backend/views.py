from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import AirtableService
import requests

#HTTP_406_NOT_ACCEPTABLE if user already exists
#HTTP_401_UNAUTHORIZED wrong password
#HTTP_404_NOT_FOUND if username does not exist
#HTTP_500_NOT_FOUND unexpected errors

#Signing up users change errors
#Create a view to send Marilyn all the issues of a particular username
#Create a view to send Marilyn all the issues of city where user is from
#Editing user details should be added using PATCH OR PUT (I will contact Nandita to change if I can't)
#Create a single user details view -- DONE



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

class SingleUser(APIView):
    def get(self, request, name):
        try:
            # print(name)
            #I HAVE TO EDIT IT
            user = AirtableService.get_particular_user_details(name)
            return Response(user, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class SingleUserIssue(APIView):
    def get(self, request, name):
        try:
            issues = AirtableService.get_user_issues(name)
            return Response(issues, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class CityIssue(APIView):
    def get(self, request, name):
        try:
            issues = AirtableService.get_issue_in_city(name)
            return Response(issues, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        