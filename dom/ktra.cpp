#include <iostream>
using namespace std;

// Playlist Youtube: https://www.youtube.com/watch?v=Te7XzkESCRs&list=PLB35cxMkOIArEEZ30ZRYrjX-fjB21lNFT

// tạo cấu trúc node
struct Node
{
    // dữ liệu
    int data;
    Node *pNext;
};
struct MyList
{
    Node *pHead;
};

Node *createNode(int value)
{
    Node *temp = new Node;
    temp->data = value;
    temp->pNext = NULL;

    return temp;
}

bool checkEmpty(Node *pHead)
{
    if (pHead == NULL)
        return true;
    return false;
}

void addHead(Node *&pHead, Node *p)
{
    if (checkEmpty(pHead))
    { // rỗng
        pHead = p;
    }
    else
    {
        p->pNext = pHead;
        pHead = p;
    }
}
void addHead(MyList &l, Node *p)
{
    if (checkEmpty(l.pHead))
    { // rỗng
        l.pHead = p;
    }
    else
    {
        p->pNext = l.pHead;
        l.pHead = p;
    }
}

void addTail(Node *&pHead, Node *p)
{
    if (checkEmpty(pHead))
    { // rỗng
        pHead = p;
    }
    else
    {
        // Tìm thằng cuối
        Node *temp = pHead; // node cuối là temp khi xong while
        while (temp->pNext != NULL)
        {
            temp = temp->pNext;
        }
        temp->pNext = p;
    }
}

void printList(Node *pHead)
{
    Node *temp = pHead;
    while (temp != NULL)
    {
        cout << temp->data << endl;
        temp = temp->pNext;
    }
}
void printList(MyList l)
{
    Node *temp = l.pHead;
    while (temp != NULL)
    {
        cout << temp->data << endl;
        temp = temp->pNext;
    }
}

int main(int argc, const char *argv[])
{
    Node *pHead = NULL;
    MyList list;

    // Tạo 1 node n1
    Node *n1 = createNode(1);
    // Thêm n1 vào đầu ds
    addHead(pHead, n1);

    // Tạo 1 node n2
    Node *n2 = createNode(2);
    // Thêm n2 vào đầu ds
    addHead(pHead, n2);

    // Tạo 1 node n3
    Node *n3 = createNode(3);
    // Thêm n3 vào cuối ds
    addTail(pHead, n3);

    // Duyệt ds
    printList(pHead);

    return 0;
}