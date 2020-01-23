# project-2
Sam Ewing, Panav Jayanth, David Born

Project Proposal: Missing Migrants Relative to Southern U.S. Border Entry

Purpose

The purpose will be to provide visualizations that enable analysis of migration patterns and missing migrants at different southern U.S. entry points. 

Visualizations

We will assemble interactive visualizations utilizing a combination of geographic maps and plots that provide: 

•	Migration volume by port of entry, border state, means of travel, and timing
•	Missing migrants relative to distance (proximity) to port of entry, border state, and timing
•	Outcomes describing missing migrant incidents (missing, fatalities, cause-of-death)
•	Demographics on missing migrants (men, women, children)

Analysis

The visualizations will facilitate examination of:

•	Highest migration traffic by port of entry and border states, and means of travel
•	Trends in migration traffic over time by port of entry, border states, and means of travel
•	Most dangerous ports of entry and border states by proximity of missing migrant incidents (incident volume and incidents relative to crossing volume)
•	Trends in missing migrants by proximity to ports of entry and border states
•	Trends in missing migrant demographics (men, women, children) by proximity to ports of entry and border states

Data

The visualizations will be built using data previously compiled under our ETL Project and stored in PostgreSQL.  There were two different data sets loaded into PostgreSQL that both contain lat-long coordinates for measuring proximity of missing migrant incidents relative to ports of entry and border states. 

NOTE:
The original datasets can be found using the links below. Since we received approval from Richard to build upon Sam and David's ETL project, this project will serve as a direct continuation of our ETL assignment. In order to preserve our original data cleansing / transforming efforts, all of the files from our ETL project are stored in this repository under the "ETL-Starter-Resources" folder.

Kaggle Data Sources:

1.	Border Crossing Entry Data https://www.kaggle.com/akhilv11/border-crossing-entry-data
2.	Missing Migrants Project  https://www.kaggle.com/snocco/missing-migrants-project

Concept:
This link shows a map of recorded deaths in the Grand Canyon - with similar functionality that we intend to develop for this project.
http://www.arcgis.com/apps/StorytellingTextLegend/index.html?appid=0d41baefd133497db0a10018af579b5a
