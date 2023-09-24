#include <iostream>
using namespace std;
class computer {
public:
	computer(double = 0.0, int = 0, int = 0);
	void setProcessor(double);
	void setRAM(int);
	void setHDD(int);
	double getProcessor();
	int getRAM();
	int getHDD();
	bool operator<=(computer& right);
private:
	double processor;
	int RAM;
	int HDD;
};
computer::computer(double GHz, int GB, int TB)
{
	processor = GHz;
	RAM = GB;
	HDD = TB;
}

void computer::setProcessor(double GHz)
{
	if (GHz >= 0) {
		processor = GHz;
	}
	else {
		cout << "NaN" << endl;
	}
}

void computer::setRAM(int GB)
{
	if (GB >= 0) {
		RAM = GB;
	}
	else {
		cout << "NaN" << endl;
	}
}

void computer::setHDD(int TB)
{
	if (TB >= 0) {
		HDD = TB;
	}
	else {
		cout << "NaN" << endl;
	}
}

double computer::getProcessor()
{
	return processor;
}

int computer::getRAM()
{
	return RAM;
}

int computer::getHDD()
{
	return HDD;
}

bool computer::operator<=(computer& right)
{
	if (RAM <= right.RAM || processor<=right.processor || HDD<=right.HDD) {
		return true;
	}
	else {
		return false;
	}
}

int main()
{
	computer c1, c2;
	cout << "Recomended" << endl;
	cout << "processor: ";

	c1.setProcessor(2.70);
	cout << c1.getProcessor() << " GHz" << endl;

	cout << "RAM: ";
	c1.setRAM(8);
	cout << c1.getRAM() << " GB" << endl;

	cout << "HDD: ";
	c1.setHDD(1);
	cout << c1.getHDD() << " TB \n" << endl;


	cout << "Your computer" << endl;
	cout << "processor: ";
	c2.setProcessor(3.70);
	cout << c2.getProcessor() << " GHz" << endl;

	cout << "RAM: ";
	c2.setRAM(16);
	cout << c2.getRAM() << " GB" << endl;

	cout << "HDD: ";
	c2.setHDD(3);
	cout << c2.getHDD() << " TB" << endl;

	if (c1 <= c2) {
		cout << "\nTrue! Your computer is better!" << endl;
	}
	else
		cout << "\nFalse! Your computer is not recomended :(" << endl;
}


