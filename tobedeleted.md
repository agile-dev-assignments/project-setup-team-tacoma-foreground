## Overview

Every individual and group must complete the following kickoff process to have the tools setup to allow them to collaborate effectively on team projects.

## Assign roles

Each team will decide, using whatever decision-making process they prefer, on which two members will fill the initial roles of **Scrum Master** and **Product Owner**.

-   all team members, including Scrum Master and Product Owner, are also **Developers** - everyone is expected to do the design and code work in every sprint.
-   these roles must shift every Sprint, so each team member should fill
    each role at least once.
-   each team must announce which team members are **Scrum Master** and **Product Owner** at the start of each Sprint

## Set up Slack channels

Slack is each team's primary communication tool. Each member's communications and contributions within Slack are tracked and used towards grading. Communications within private channels are not visible to the Professor and therefore will not be considered when grading.

### Team-specific channels

Each team **must have at least one Slack channel** where the professor, course assistants, graders, and tutors are also invited to be members:

-   use this channel for general team communication
-   individual participation in this and other channels may be used towards each member's grade

Channel names must be short and consistent. For example, if a team is named `octopus`, their main channel might be called `team_octopus`

## Configure GitHub repository

GitHub is each team's primary resource for version control, project
planning, issue tracking, and project documentation. Each member's
contributions within GitHub are tracked and used towards grading.

### GitHub repository

GitHub repositories have been created for each team and are in the control of the team.  There are several key files that all repositories must have properly set up.

#### README.md
Every project must have a [README.md](./README.md) that automatically renders on the project's main repository page with basic details of the project, including:

- a description of project, including the [Product Vision Statement](https://knowledge.kitchen/Scrum_development_framework#Product_vision_statement)
- the core team members, including links to their GitHub accounts and any other web presence they have
- a short history of how the project came to be and
information about how to contribute to the project (i.e. a link to the [CONTRIBUTING.md](./CONTRIBUTING.md) document)
- instructions for building and testing the project (update with that information once the project reaches that stage)
- links to any additional Markdown documents or web pages that may be relevant reading about the project
- anything else you think is important to communicate to people viewing the project

#### CONTRIBUTING.md
Each team must collaboratively draft a [CONTRIBUTING.md](./CONTRIBUTING.md) - a Markdown document exclusively dedicated to how others can contribute to this project.  This document is essentially a contract agreed-upon by all developers and contributors, and includes at a minimum:
- the project's values and team norms, including the definition of "done"
- the Git workflow that the team follows
- a detailed description of the rules of contributing and any considerations or how and what to contribute
- how disagreements or conflicts among team members will be resolved
- instructions for setting up the local development environment in order to work on this project
- instructions for building and testing the project (update with that information once the project reaches that stage)

This documents allows potential contributors, whether in the open source community or in a private organization, to see the project's rules and processes for contributions. It should be well-formatted with clear headings and subheadings.  

GitHub provides a link to this document automatically to any user who creates a Pull Request on this project.

#### .gitignore

Each repository must have a [.gitignore](./.gitignore) file that informs git not to track platform code, 3rd party library code, and other common development artifacts that are not your own code. It is also imperative to not track files that contain sensitive information, such as usernames/passwords to a database, or files containing users' personal information.

Use [this example .gitignore file for Node.js-based web apps](https://gist.github.com/bloombar/1bbca4aafb267920ac220864d99d6c8f) as the baseline for your .gitignore file.

### GitHub Issue labels

Each team must create a set of **labels** for using within GitHub's Issues tracker.  Labels allow you to tag an issue in a particular category or context for easy filtering later.

Begin by creating the following labels.  Once you begin development, every Issue in GitHub's Issues tracker must be assigned one of these labels:
- `user story` - to be used for all user stories
- `task` - to be used for all tasks
- `spike` - to be used for all spikes.

Feel free to create other labels that are useful to your team.

### GitHub Issue milestones

Each team must have a set of Milestones to represent each Sprint within GitHub's Issues tracker:
- `Sprint 0`
- `Sprint 1`
- `Sprint 2`
- `Sprint 3`
- `Sprint 4`

What to include in each Milestone's settings:
- a description of the big picture idea of what the Sprint is aiming to achieve
- the due date for the Sprint, as indicated by the due date of the Stakeholder Demos on the course schedule

Once a particular sprint has begun, all issues representing tasks that have been decided to be addressed within that sprint must be assigned to the proper Milestone representing that sprint.

### GitHub project boards

Each team must create a project board for each of the four Sprints following [these setup instructions](https://knowledge.kitchen/GitHub_for_team_collaboration#Project_boards).

## Prepare to git to work

Each team member must `clone` their team's GitHub repository onto their own local machine and `push` any changes they make back to GitHub at regular inteverals - usually every few days at the least.

## Create the initial product backlog

Each team must have an initial [product backlog](Scrum_development_framework#Product_Backlog) of user stories based on their understanding of the project requirements so far.

-   each item in the product backlog must be added as an Issue to GitHub's Issue tracker
-   follow [the recommended workflow for adding issues to GitHub's issue tracker](https://knowledge.kitchen/GitHub_for_team_collaboration#Issues)
-   make sure all user stories in the product backlog have [appropriate labels](https://knowledge.kitchen/GitHub_for_team_collaboration#Labels) attached to them:
    - user stories have the `user story` label
    - spikes have the `spike` label
    - other types of tasks have the `tasks` label
    - etc.