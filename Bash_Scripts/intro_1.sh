#!/usr/bin/bash
	# shebang is #!.. Indicates the bash path to exe this script
	# after creating a script,
	# run -> chmod u+x script_name.sh
	# will enable the file to be executable
	# by teh current user (u)
echo "Today is " `date`
	#Comment in bash
	#receive user input, store it in the_path
echo -e "\nEnter the path to directory"
read the_path
 	
echo -e "\n Your path has the following files and folders"
ls $the_path

	#Variables is bash
	#assign using =
	# WITH NO SPACES
	#access using $var_name
country=Malaysia
echo $country

newVariable="my country is "$country
echo $newVariable

	# Input and output in Bash scripts
echo "What is your name?"
read entered_name
echo -e "\nWelcome to Bash scripting tutorial" $entered_name


