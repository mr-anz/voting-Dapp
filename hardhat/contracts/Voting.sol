// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Voting {
    
    struct Candidate {
        string name;
        string description;
        string imageUri;
        address creator;
    }

    uint256 public candidateCount = 0;
    address public owner;
    uint256 public totalVotes;

    mapping(uint256 => Candidate) public candidates;
    mapping(uint256 => uint256) public votes;
    mapping(address => mapping(uint256 => bool)) public hasVoted;    
    mapping(uint256 => address[]) public participants;

    constructor() {
        owner = msg.sender;
    }

    function addCandidate(string calldata name, string calldata description, string calldata imageUri) public {
      
        Candidate memory person;
        person.name = name;
        person.description = description;
        person.imageUri = imageUri;
        person.creator = msg.sender;
        candidates[candidateCount] = person;
        candidateCount++;
    }

    function vote(uint256 id) public {
        require(id > 0, "Candidate doesn't exist");
        require(id <= candidateCount, "Candidate doesn't exist");
        require(!hasVoted[msg.sender][id], "You have already voted for this candidate"); // Check if voter has already voted

        votes[id]++;
        totalVotes++;

        hasVoted[msg.sender][id] = true; 
        participants[id].push(msg.sender);
    }

    function getCandidates() public view returns(Candidate[] memory) {
        Candidate[] memory candidate = new Candidate[](candidateCount);

        for(uint256 i = 0; i < candidateCount; i++) {
            Candidate storage item = candidates[i];
            candidate[i] = item;
        }

        return candidate;
    }

    function getCandidate(uint256 id) public view returns(Candidate memory) {
        return candidates[id];
    }

    function getVotes(uint256 id) public view returns(uint256) {
        return votes[id];
    }

    function getParticipants(uint256 id) public view returns (address[] memory) {
        return participants[id];
    }    
}