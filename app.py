import os
from random import randint
from datetime import datetime, timedelta

# Change to the directory containing your Git repository if needed
# os.chdir('/path/to/your/repo')

# Function to generate a date string in ISO 8601 format
def generate_commit_date(days_ago):
    date = datetime.now() - timedelta(days=days_ago)
    return date.strftime('%Y-%m-%dT%H:%M:%S')

for i in range(1, 60):
    for j in range(randint(1, 10)):
        d = f'{i} days ago'
        with open('file.txt', 'a') as file:
            file.write(d + '\n')  # Added newline for readability

        # Add changes to staging
        os.system('git add .')

        # Commit changes with the specified date
        commit_date = generate_commit_date(i)
        os.system(f'git commit --date="{commit_date}" -m "commit"')

# Push all commits to the remote repository
os.system('git push -u origin main')
