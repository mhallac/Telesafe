<h1>Telesafe</h1>
<h2>About Project</h2>
Telesafe is a closed-network medium to connect with other members of an individual's support group. Members will be invited to join a given group by the group facilitator, and any identifying information remains hidden to all other members unless both the individual and the group facilitator wishes to make that information available for each of the members. Members will be able to chat, share updates, share photos, and video-call under the purview of the facilitator, and the facilitator can also place members into smaller groups to create a more intimate experience. Of particular interest to facilitators, especially clinicians, is the use of the Google Cloud Natural Language API to analyze each participant's general sentiment and mood over time, as determined from the language of their posts. This project was built for the MedHacks Hackathon in 2020


<h2>Running Instructions</h2>

export GOOGLE_APPLICATION_CREDENTIALS="/c/Users/mhall/OneDrive/desktop/Telesafe/server/apikey.json"<br>
export FLASK_APP="sentiment.py"<br>
flask run

